import { ICodeType } from '../models/codeSystems';
import { INarrative } from '../models/narratives';

function reduceToObject(list: any): any {
  return list.reduce((map: any, obj: any) => {
    map[obj.id] = { ...obj };
    return map;
  }, {});
}

function resourceNarrative(name: string, managingOrg: string, mrValue: string): INarrative {
  const summaryText = `
      <div xmlns=\\"http://www.w3.org/1999/xhtml\\">

        \\n\\t\\t\\t

          <p>Patient ${name} @ ${managingOrg}. 

              MR = ${mrValue}</p>

      </div> 
    `;

  return {
    status: 'generated',
    div: summaryText,
  }
}

const forWho = {
  patient: 'patient',
  patientContact: 'patient_ref',
}
const codeType: ICodeType = {
  relationship: 'relationship',
  language: 'language',
  maritalStatus: 'marital_status',
}

export {
  forWho,
  codeType,
  reduceToObject
}
