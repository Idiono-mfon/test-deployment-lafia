import axios from 'axios';
import { injectable } from 'inversify';
import { Env } from '../../config/env';
import { GenericResponseError } from '../../utils';

const env = Env.all();

const axiosInstance = axios.create({
  baseURL: `${env.consent_service_base_url}/`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': env.consent_service_auth_code
  }
});

@injectable()
export class ConsentService {

  public async createConsentAccount(data: ICreateConsentAccount) {
    try {
      data.consentApplication = 'LafiaConsent';

      await axiosInstance.post('/createUserConsentApplication', data);
    } catch (e: any) {
      console.error(e);
    }
  }

  public async addConsentCategory(user_email: string, category = 'careNow') {
    try {
      await axiosInstance.put(`/addConsentCategory/${category}?user=${user_email}`);
    } catch (e: any) {
      console.error(e.response.data);
      throw new GenericResponseError(e.response?.data?.message, e.response?.data?.code);
    }
  }

  public async removeConsentCategory(user_email: string, category: string) {
    try {
      await axiosInstance.put(`/removeConsentCategory/${category}?user=${user_email}`);
    } catch (e: any) {
      console.error(e.response.data);
      throw new GenericResponseError(e.response?.data?.message, e.response?.data?.code);
    }
  }

  public async processNewConsent(user_email: string, data: IProcessNewConsent) {
    try {
      if (!data.granteeRole) {
        data.granteeRole = 'practitioner';
      }

      if (!data.granteeUserName) {
        data.granteeUserName = 'Lafia Stream Consent';
      }

      if (!data.consentInfo) {
        data.consentInfo = {};
      }

      const consents = await axiosInstance.post(`/processNewConsent?user=${user_email}`, data);

      return consents?.data?.data?.data;
    } catch (e: any) {
      console.error(e.response.data);
      throw new GenericResponseError(e.response?.data?.message, e.response?.data?.code);
    }
  }

  public async getAllConsent(user_email: string) {
    try {
      const consents = await axiosInstance.get(`/allConsentDocs?user=${user_email}`);

      return consents?.data?.data;
    } catch (e: any) {
      console.error(e.response.data);
      throw new GenericResponseError(e.response?.data?.message, e.response?.data?.code);
    }
  }

  public async getAllConsentByType(user_email: string, consentType: string) {
    try {
      const consents = await axiosInstance.get(`/consentDocsByType?consentType=${consentType}&user=${user_email}`);

      return consents.data?.data;
    } catch (e: any) {
      console.error(e.response.data);
      throw new GenericResponseError(e.response?.data?.message, e.response?.data?.code);
    }
  }
}

export interface ICreateConsentAccount {
  userName: string;
  consentApplication?: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface IProcessNewConsent {
  consentType?: string;
  granteeUserName?: string;
  granteeRole?: string;
  consentInfo?: {
    info?: string;
  }
}
