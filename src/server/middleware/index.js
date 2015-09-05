import compression from './compression';
import favicon from './favicon';
import staticAssets from './static';

export default function initializeMiddleware(app) {
  compression(app);
  favicon(app);
  staticAssets(app);
};
