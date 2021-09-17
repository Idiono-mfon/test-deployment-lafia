export class Slug {
  public static format(name: string): string {
    return name.toLowerCase().split(' ').join('-');
  }
}
