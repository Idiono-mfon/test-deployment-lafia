import { injectable } from 'inversify';
import { IVideoBroadcast } from '../../../app/models';
import { DbAccess } from '../../../app/repository';
import { TestBaseRepository } from './baseRepository';

const videoBroadcasts: IVideoBroadcast[] = [
  {
    patient_name: 'David Test',
    patient_id: '11',
    description: 'who cares',
    initiate_care: 'false',
    video_url: 'https://www.sampleurl.com'
  }
];

@injectable()
export class TestVideoBroadcastRepository extends TestBaseRepository implements DbAccess {
  constructor() {
    super(videoBroadcasts);
  }

  public async findAll<T = any>(patient_id: T): Promise<any[]> {
    let result = videoBroadcasts.map(x => x.patient_id === (patient_id as unknown as string));

    return Promise.resolve(result);
  }
}
