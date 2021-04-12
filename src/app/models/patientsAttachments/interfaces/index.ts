import { IBase } from '../../base';

export interface IPatientsAttachment extends IBase {
  patientId?: string;
  attachmentId?: string;
}
