import express from 'express';
import config from '../config';
import * as actions from './routes/index';
import PrettyError from 'pretty-error';

import middleware from './middleware';

const pretty = new PrettyError();
const app = express();

middleware(app);

export default function api() {
  return new Promise((resolve) => {
    // Initialize routes
    app.use((req, res) => {
      const matcher = req.url.split('?')[0].split('/');
      const action = matcher && actions[matcher[1]];
      if (action) {
        action(req, matcher.slice(2))
          .then((result) => {
            res.json(result);
          }, (reason) => {
            if (reason && reason.redirect) {
              res.redirect(reason.redirect);
            } else {
              console.error('API ERROR:', pretty.render(reason));
              res.status(reason.status || 500).json(reason);
            }
          });
      } else {
        res.status(404).end('NOT FOUND');
      }
    });
    app.listen(config.apiPort);
    resolve();
  });
}
