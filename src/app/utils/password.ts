import bcrypt from 'bcryptjs';

export class Password {
  public static async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  public static async compare(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  /*
  * 1. Password must be min of 6 characters.
  * 2. It must contain at least 1 upper case character
  * 3. It must have at least 1 lower case character
  * 4. Must contain at least any of these special characters - @#$%^&-+=()
  * 5. Must at least contain 1 digit
  */
  public static validatePassword(password: string): boolean {
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&-.+=()])(?=.*[A-Z]).{6,}/;

    return regex.test(password);
  }
}
