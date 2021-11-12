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
  FileService,
  eventService,
  eventName
} from '../../services';
import { GenericResponseError, HttpStatusCode, logger } from '../../utils';
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
  @inject(TYPES.FileService)
  private readonly fileService: FileService;

  @httpPost('/broadcast', TYPES.AuthMiddleware)
  public async createBroadcast(@request() req: Request, @response() res: Response) {
    logger.info('Running LafiaMediaController.createBroadcast');
    try {
      const { user } = res.locals;
      const broadcast = await this.lafiaMediaService.createBroadcast(user?.id);

      this.success(res, broadcast, 'Broadcast created successfully', HttpStatusCode.CREATED);
    } catch (e: any) {
      logger.error(`Error creating broadcast:`, e);
      this.error(res, e);
    }
  }

  @httpPost('/events')
  public async listenForMediaServerEvent(@request() req: Request, @response() res: Response): Promise<void> {
    logger.info('Running LafiaMediaController.listenForMediaServerEvent');
    try {
      // Retrieve the request's body
      const event = req.body;

      if (event?.action === 'vodReady') {
        const streamUrl = await this.lafiaMediaService.getRecordedStream(event?.vodId);

        await this.lafiaMediaService.addStreamUrlToPatientBroadcast(streamUrl, event);
      }

      if (event?.StatusCallbackEvent === 'recording-completed') {
        logger.info('Twilio Recording completed');
        const twilioRoom = await this.twilioRoomService.getOneRoom({ room_sid: event?.RoomSid });

        await this.twilioService.triggerMediaComposition(twilioRoom, event);
      }

      if (event?.StatusCallbackEvent === 'composition-available') {
        logger.info('Twilio video composition available');
        const twilioFileUrl = await this.twilioService.getVideoRecordingFile(event?.CompositionSid);
        const recordedFileUrl = await this.fileService.transferFileToLafiaS3Bucket(twilioFileUrl);
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
              { data: encounterResourceData },
            );
          } catch (e: any) {
            logger.error(`Could not create telehealth encounter:`, e);
            throw new GenericResponseError(e.message, e.code);
          }

          const encounter = encounterResponse?.data;
          const resource_type = 'encounter';
          const publishData = { data: encounter, resource_type };

          // Raise new encounter event
          eventService.emit(eventName.newEncounter, encounter?.id, publishData);

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
              { data: mediaResourceData }
            );

            const media = mediaResponse?.data;
            const resource_type = 'media';
            const publishData = { data: media, resource_type };

            // Raise new media event
            eventService.emit(eventName.newMedia, media?.id, publishData);
          } catch (e: any) {
            logger.error(`Could not create telehealth encounter media:`, e);
            throw new GenericResponseError(e.message, e.code);
          }
        }

        logger.info('TeleHealth Record encounter successfully saved');
      }

      res.sendStatus(200);
    } catch (e: any) {
      logger.error(`${e}`);
    }
  }

  @httpGet('/broadcast/:streamId', TYPES.AuthMiddleware)
  public async getRecordedStream(@request() req: Request, @response() res: Response) {
    logger.info('Running LafiaMediaController.getRecordedStream');
    try {
      const { streamId } = req.params;
      const broadcast = await this.lafiaMediaService.getOneVideoRecord({ streamId });

      this.success(res, broadcast, 'Recorded Video Retrieved successfully', HttpStatusCode.CREATED);
    } catch (e: any) {
      logger.error(`Error getting recorded stream:`, e);
      this.error(res, e);
    }
  }

  @httpGet('/broadcast', TYPES.AuthMiddleware)
  public async getAllRecordedStream(@request() req: Request, @response() res: Response) {
    logger.info('Running LafiaMediaController.getAllRecordedStream');
    try {
      const { user } = res.locals;
      const broadcast = await this.lafiaMediaService.getAllVideoRecords(user?.id!);

      this.success(res, broadcast, 'Recorded Video Retrieved successfully', HttpStatusCode.OK);
    } catch (e: any) {
      logger.error(`Error getting all recorded stream:`, e);
      this.error(res, e);
    }
  }

  @httpDelete('/broadcast/:id', TYPES.AuthMiddleware)
  public async getRecordedStreamUrl(@request() req: Request, @response() res: Response) {
    logger.info('Running LafiaMediaController.getRecordedStreamUrl');
    try {
      const { id } = req.params;
      const broadcast = await this.lafiaMediaService.deleteVideoRecord(id);

      this.success(res, broadcast, 'Recorded Video deleted successfully', HttpStatusCode.CREATED);
    } catch (e: any) {
      logger.error(`Error getting recorded stream url:`, e);
      this.error(res, e);
    }
  }
}
