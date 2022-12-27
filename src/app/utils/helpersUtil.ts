export const random6Digits = (): string => {
  const min = 100000;
  const max = 900000;
  const num = Math.floor(Math.random() * min) + max;
  return num.toString();
};

export const OTPExpiryTime = (): Date => {
  const expiryTime = 1 * 24 * 60 * 60 * 1000; //1 day in millisecond;

  return new Date(Date.now() + expiryTime);
};

export const OTPIsValid = (time: Date): boolean => {
  return Date.now() < new Date(time).getTime();
};

export const cleanUIID = (data: string): string => {
  return data.replace(/-/g, '');
};
