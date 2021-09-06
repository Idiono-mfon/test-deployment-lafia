import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpDelete, httpGet, httpPost, request, response } from 'inversify-express-utils';
import TYPES from '../../config/types';
import { AuthMiddleware } from '../../middlewares';
import {
  TwilioRoomService,
  FhirServerService,
  LafiaMediaService,
  TwilioService,
  MessageBroker,
  rmqFhirSuccessResponse
} from '../../services';
import { GenericResponseError, HttpStatusCode } from '../../utils';
import { BaseController } from '../baseController';

@controller('/media')
export class LafiaMediaController extends BaseController {
  @inject(TYPES.LafiaMediaService)
  private readonly lafiaMediaService: LafiaMediaService;
  @inject(TYPES.AuthMiddleware)
  private readonly auth: AuthMiddleware;
  @inject(TYPES.TwilioService)
  private readonly twilioService: TwilioService;
  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: FhirServerService;
  @inject(TYPES.TwilioRoomService)
  private readonly twilioRoomService: TwilioRoomService;
  @inject(TYPES.MessageBroker)
  private readonly messageBroker: MessageBroker;

  @httpPost('/broadcast', TYPES.AuthMiddleware)
  public async createBroadcast(@request() req: Request, @response() res: Response) {
    try {
      const { user } = res.locals;
      const broadcast = await this.lafiaMediaService.createBroadcast(user?.id);

      this.success(res, broadcast, 'Broadcast created successfully', HttpStatusCode.CREATED);
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpPost('/events')
  public async listenForMediaServerEvent(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      // Retrieve the request's body
      const event = req.body;

      console.log('Event:', event);

      if (event?.action === 'vodReady') {
        const streamUrl = await this.lafiaMediaService.getRecordedStream(event?.vodId);

       await this.lafiaMediaService.addStreamUrlToPatientBroadcast(streamUrl, event);
      }

      if (event?.StatusCallbackEvent === 'recording-completed') {
        const twilioRoom = await this.twilioRoomService.getOneRoom({ room_sid: event?.RoomSid });

        await this.twilioService.triggerMediaComposition(twilioRoom, event);
      }

      if (event?.StatusCallbackEvent === 'composition-available') {
        const recordedFileUrl = await this.twilioService.getVideoRecordingFile(event?.CompositionSid);
        const { practitioner, patients } = await this.twilioService.getParticipantsByRoomSid(event?.RoomSid);

        for (let patientId of patients) {
          // Create an encounter for the patient
          const encounterResourceData = {
            resourceType: 'Encounter',
            status: 'finished',
            class: {
              system: 'https://terminology.hl7.org/CodeSystem/v3-ActCode',
              code: 'VR',
              display: 'virtual'
            },
            subject: {
              reference: `Patient/${patientId}`,
            },
            participant: [
              {
                period: {
                  end: event?.Timestamp,
                },
                individual: {
                  reference: `Practitioner/${practitioner}`
                }
              }
            ],
            period: {
              end: event?.Timestamp,
            },
            reasonCode: [
              {
                text: `The patient had a TeleHealth care with a practitioner with concern to the patient's health condition`,
              }
            ]
          }

          let encounterResponse: any

          try {
            encounterResponse = await this.fhirServerService.executeQuery(
              '/Encounter',
              'POST',
              encounterResourceData
            );
          } catch (e) {
            throw new GenericResponseError(e.message, e.code);
          }

          const encounter = encounterResponse?.data;
          const resource_type = 'encounter';
          const publishData = { data: encounter, resource_type };

          const rmqPubMsg = rmqFhirSuccessResponse(publishData, encounter?.id, 'New encounter published successfully');
          await this.messageBroker.rmqPublish(JSON.stringify(rmqPubMsg));

          // Create a media for the encounter
          const mediaResourceData = {
            resourceType: 'Media',
            status: 'completed',
            type: {
              coding: [
                {
                  system: 'https://www.hl7.org/fhir/codesystem-media-type.html',
                  code: 'video',
                  display: 'Video'
                }
              ]
            },
            encounter: {
              reference: `Encounter/${encounter?.id}`,
            },
            subject: {
              reference: `Patient/${patientId}`,
            },
            createdDateTime: event?.Timestamp,
            operator: {
              reference: `Practitioner/${practitioner}`
            },
            duration: event?.Duration,
            content: {
              contentType: 'video/mp4',
              url: recordedFileUrl,
              size: event?.Size,
              title: 'TeleHealth',
              creation: event?.Timestamp,
            }
          }

          try {
            const mediaResponse = await this.fhirServerService.executeQuery(
              '/Media',
              'POST',
              mediaResourceData
            );

            const media = mediaResponse?.data;
            const resource_type = 'media';
            const publishData = { data: media, resource_type };

            const rmqPubMsg = rmqFhirSuccessResponse(publishData, media?.id, 'New media published successfully');
            await this.messageBroker.rmqPublish(JSON.stringify(rmqPubMsg));
          } catch (e) {
            console.error('MediaError:', e.message);
            throw new GenericResponseError(e.message, e.code);
          }
        }

        console.log('TeleHealth Record encounter successfully saved');
      }

      res.sendStatus(200);
    } catch (e) {
      console.log(e);
    }
  }

  @httpGet('/broadcast/:streamId', TYPES.AuthMiddleware)
  public async getRecordedStream(@request() req: Request, @response() res: Response) {
    try {
      const { streamId } = req.params;
      const broadcast = await this.lafiaMediaService.getOneVideoRecord({ streamId });

      this.success(res, broadcast, 'Recorded Video Retrieved successfully', HttpStatusCode.CREATED);
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpGet('/broadcast', TYPES.AuthMiddleware)
  public async getAllRecordedStream(@request() req: Request, @response() res: Response) {
    try {
      const { user } = res.locals;
      const broadcast = await this.lafiaMediaService.getAllVideoRecords(user?.id!);

      this.success(res, broadcast, 'Recorded Video Retrieved successfully', HttpStatusCode.CREATED);
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpDelete('/broadcast/:id', TYPES.AuthMiddleware)
  public async getRecordedStreamUrl(@request() req: Request, @response() res: Response) {
    try {
      const { id } = req.params;
      const broadcast = await this.lafiaMediaService.deleteVideoRecord(id);

      this.success(res, broadcast, 'Recorded Video deleted successfully', HttpStatusCode.CREATED);
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpPost('/twilio/callback')
  public async twilioVideoCallback(@request() req: Request, @response() res: Response) {

  }
}