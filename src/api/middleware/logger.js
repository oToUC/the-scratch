import FileStreamRotator from 'file-stream-rotator';
import fs from 'fs';
import logger from 'morgan';
import path from 'path';

export default function loggerMiddleware(app, opts = {}) {
  app.use(logger('combined'));

  const logPath = opts.path || path.join(__dirname, '..', '..', '..', 'tmp', '/api-%DATE%.log');
  const rotate = opts.rotate || 'daily';
  const verbose = opts.verbose || false;

  const accessLogStream = FileStreamRotator.getStream({
    filename: logPath,
    frequency: rotate,
    verbose: verbose
  });

  app.use(logger('combined', {
    stream: accessLogStream
  }));
};