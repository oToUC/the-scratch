import compression from 'compression';

export default function compressionMiddleware(app) {
  app.use(compression());
}
