import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';
import geoip from 'geoip-lite';

export const getE164Format = (phoneNumber: string, req: any) => {
    
    const ip: string = req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress;
    const geo = geoip.lookup(ip);

    const phoneUtil = PhoneNumberUtil.getInstance();
    const number = phoneUtil.parseAndKeepRawInput(phoneNumber, geo?.country);
    const phone = phoneUtil.format(number, PhoneNumberFormat.E164)
    
    return phone;
}