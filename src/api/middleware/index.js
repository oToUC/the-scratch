import body from './body';
import session from './session';

export default function initializeMiddleware(app) {
  body(app);

  session(app);
};
