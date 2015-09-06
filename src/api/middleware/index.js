import auth from './auth';
import body from './body';
import logger from './logger';
import session from './session';

export default function initializeMiddleware(app) {
  logger(app);
  body(app);
  session(app);
  auth(app);
};
