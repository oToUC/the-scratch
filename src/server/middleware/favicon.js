import path from 'path';
import favicon from 'serve-favicon';

export default function faviconMiddleware(app) {
  app.use(favicon(path.join(__dirname, '..', '..', '..', 'static', 'favicon.ico')));
};