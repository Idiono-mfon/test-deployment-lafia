import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IAppointment } from './interfaces';
import { AppointmentValidation } from './validation';

export class AppointmentModel extends BaseModel implements IAppointment {
  id!: IAppointment['id'];
  resource_type!: IAppointment['resource_type'];
  resource_id!: IAppointment['resource_id'];
  patient_participant!: IAppointment['patient_participant'];
  practitioner_participant!: IAppointment['practitioner_participant'];
  priority!: IAppointment['priority'];
  description!: IAppointment['description'];

  static get tableName() {
    return `${Schema.lafiaService}.${Table.appointments}`;
  }

  static get jsonSchema(): JSONSchema {
    return AppointmentValidation;
  }
}
