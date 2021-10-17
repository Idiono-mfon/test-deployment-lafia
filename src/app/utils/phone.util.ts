import geoip from 'geoip-lite';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import { logger } from './loggerUtil';

export const getE164Format = (phoneNumber: string, req: any) => {
    logger.info('Running PhoneUtils.getE164Format');

    const ip: string = req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress;
    const geo = geoip.lookup(ip);

    const phoneUtil = PhoneNumberUtil.getInstance();
    const number = phoneUtil.parseAndKeepRawInput(phoneNumber, geo?.country);
    return phoneUtil.format(number, PhoneNumberFormat.E164);
}
