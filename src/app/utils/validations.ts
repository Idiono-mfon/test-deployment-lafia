export class Validations {
  public static validateEmail(email: string) {
    // Regular Expression (Accepts every special
    // character along with @ symbol)
    const regexp = /\S+@\S+\.\S+/;

    // Converting the email to lowercase
    return regexp.test(String(email).toLowerCase());
  }

  public static isNumeric(str: any) {
    // if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && !isNaN(parseFloat(str))
  }
}
