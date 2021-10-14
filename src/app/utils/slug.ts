import { logger } from './loggerUtil';

export class Slug {
  public static format(name: string): string {
    logger.info('Running Slug.format');

    return name.toLowerCase().split(' ').join('-');
  }
}
