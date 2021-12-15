export const getE164FormatMockImpl = (phoneNumber: string, ip?: string) => {
  if (ip || !ip) {
    // Avoid the warning of unused parameter
  }

  return phoneNumber;
};
