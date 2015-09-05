import path from 'path';

export default function staticAssetsMiddleware(app) {
  app.use(require('serve-static')(path.join(__dirname, '..', '..', '..', 'static')));
}
