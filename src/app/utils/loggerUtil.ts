import { createLogger, format, transports } from 'winston';
import { Env } from '../config/env';

require('winston-daily-rotate-file');

const env = Env.all();

// @ts-ignore
const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: `./logs/%DATE%-file.log`,
  datePattern: 'YYYY-MM-DD'
});

const { combine, timestamp, printf, json, prettyPrint, simple, colorize, align } = format;
const myFormat = printf( ({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

const logger = createLogger({
    level: 'debug',
    exitOnError: false,
    format: combine(
      json(),
      timestamp(),
    ),
    transports: [dailyRotateFileTransport],
    exceptionHandlers: [
      new transports.File({ filename: `./logs/exceptions.log` })
    ],
    // @ts-ignore
    rejectionHandlers: [
      new transports.File({ filename: `./logs/rejections.log` })
    ],
  });

// If we're not in production then log to the `console`
if (env.environment !== 'production') {
  logger.add(new transports.Console({
    format: combine(
      align(),
      prettyPrint({ colorize: true }),
      colorize(),
      simple(),
      timestamp(),
      myFormat,
    ),
  }));
}

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  // @ts-ignore
  write(message: any, encoding: any) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    return logger.info(message);
  },
};


export { logger };
