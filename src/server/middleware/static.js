import path from 'path';
import favicon from 'serve-favicon';

export default function staticAssetsMiddleware(app) {
  app.use(require('serve-static')(path.join(__dirname, '..', '..', '..', 'static')));
};