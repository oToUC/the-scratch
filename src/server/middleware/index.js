import auth from '../../api/middleware/auth';
import compression from './compression';
import favicon from './favicon';
import staticAssets from './static';
import session from '../../api/middleware/session';

export default function initializeMiddleware(app) {
  compression(app);
  favicon(app);
  staticAssets(app);
  session(app);
  auth(app);
}
