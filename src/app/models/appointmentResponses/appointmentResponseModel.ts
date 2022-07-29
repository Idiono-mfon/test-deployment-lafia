import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IAppointmentResponse } from './interfaces';
import { AppointmentResponseValidation } from './validation';

export class AppointmentResponseModel extends BaseModel implements IAppointmentResponse {
  id!: IAppointmentResponse['id'];
  resource_type!: IAppointmentResponse['resource_type'];
  resource_id!: IAppointmentResponse['resource_id'];
  appointment!: IAppointmentResponse['appointment'];
  participant_status!: IAppointmentResponse['participant_status'];
  comment!: IAppointmentResponse['comment'];

  static get tableName() {
    return `${Schema.lafiaService}.${Table.appointment_responses}`;
  }

  static get jsonSchema(): JSONSchema {
    return AppointmentResponseValidation;
  }
}
