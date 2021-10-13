import winston from 'winston';
import { Env } from '../config/env';

require('winston-daily-rotate-file');

const getDailyRotateFileTransport = (type: string, level?: string) => {
  // @ts-ignore
  return new winston.transports.DailyRotateFile({
    filename: `./logs/%DATE%/${type}.log`,
    datePattern: 'YYYY-MM-DD',
    level
  });
}

const env = Env.all();

// Define your severity levels.
// With them, You can create log files,
// see or hide levels based on the running ENV.
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
}

// This method set the current severity based on
// the current NODE_ENV: show all the log levels
// if the server was run in development mode; otherwise,
// if it was run in production, show only warn and error messages.
const level = () => {
  const currentEnv = env.environment || 'development'
  const isDevelopment = currentEnv === 'development'
  return isDevelopment ? 'debug' : 'warn'
}

// Define different colors for each level.
// Colors make the log message more visible,
// adding the ability to focus or ignore messages.
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
}

// Tell winston that you want to link the colors
// defined above to the severity levels.
winston.addColors(colors)

// Chose the aspect of your log customizing the log format.
const format = winston.format.combine(
  // Align the logs
  winston.format.align(),
  // Log error stack track
  winston.format.errors({ stack: true }),
  // Transform log to json format
  winston.format.json({ space: 2 }),
  // Add the message timestamp with the preferred format
  winston.format.timestamp({ format: 'DD-MMM-YYYY HH:mm:ss:ms' }),
  // Tell Winston that the logs must be colored
  winston.format.colorize({ all: true }),
  // Define the format of the message showing the timestamp, the level and the message
  winston.format.printf(
    (info) => `[${info.timestamp}] [${info.level}]: ${info.message}`,
  ),
)

// Define which transports the logger must use to print out messages.
// In this example, we are using three different transports
const transports = [
  // Allow to print all the error level messages inside the error.log file
  getDailyRotateFileTransport('error', 'error'),
  // Allow to print all the warning level messages inside the warning.log file
  getDailyRotateFileTransport('warning', 'warning'),
  // Allow to print all the error message inside the all.log file
  // (also the error log that are also printed inside the error.log(
  getDailyRotateFileTransport('all'),
]

// Create the logger instance that has to be exported
// and used to log messages.
const logger = winston.createLogger({
  level: level(),
  exitOnError: false,
  levels,
  format,
  transports,
  exceptionHandlers: [getDailyRotateFileTransport('exception')],
  // @ts-ignore
  rejectionHandlers: [getDailyRotateFileTransport('rejection')],
});

// If we're not in production then log to the `console`
if (env.environment !== 'production') logger.add(new winston.transports.Console());


export { logger };
