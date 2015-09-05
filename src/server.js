import Express from 'express';
import config from './config';
import middleware from './server/middleware';
import routes from './server/routes';
import api from './api/api';
import logger from './api/middleware/logger';
import path from 'path';

const app = new Express();

// Initialize server logger
logger(app, { path: path.join(__dirname, '..', 'tmp', '/server-%DATE%.log')});

// Initialize middleware
middleware(app);

// Initialize routes
routes(app);

if (config.port) {
  app.listen(config.port, (err) => {
    if (err) {
      console.error(err);
    } else {
      api().then(() => {
        console.info('==> ✅  Server is listening');
        console.info('==> 🌎  %s running on port %s, API on port %s', config.app.name, config.port, config.apiPort);
        console.info('----------\n==> 💻  Open http://localhost:%s in a browser to view the app.', config.port);
      });
    }
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
