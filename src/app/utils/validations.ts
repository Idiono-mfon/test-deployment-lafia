import { logger } from './loggerUtil';

export class Validations {
  public static validateEmail(email: string) {
    logger.info('Running Validations.validateEmail');

    // Regular Expression (Accepts every special
    // character along with @ symbol)
    const regexp = /\S+@\S+\.\S+/;

    // Converting the email to lowercase
    return regexp.test(String(email).toLowerCase());
  }

  public static isNumeric(str: any) {
    logger.info('Running Validations.isNumeric');

    // if (typeof str != "string") return false // we only process strings!
    return !Number.isNaN(str) && !Number.isNaN(parseFloat(str))
  }
}
