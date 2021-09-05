import { JSONSchema, Model } from 'objection';
import { Schema, Table } from '../../../database';
import { ITwilioRoom } from './interfaces';
import { TwilioRoomValidation } from './validation';

export class TwilioRoomModel extends Model implements ITwilioRoom {
  room_sid: ITwilioRoom['room_sid'];
  recording_sid: ITwilioRoom['recording_sid'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.twilio_rooms}`;
  }

  static get jsonSchema(): JSONSchema {
    return TwilioRoomValidation;
  }
}
