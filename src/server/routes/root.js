import React from 'react';
import Location from 'react-router/lib/Location';
import PrettyError from 'pretty-error';

import ApiClient from '../../ApiClient';
import createStore from '../../redux/create';
import Html from '../../Html';
import universalRouter from '../../universalRouter';

export default function rootRoute(app) {
  const pretty = new PrettyError();

  app.use((req, res) => {
    if (__DEVELOPMENT__) {
      // Do not cache webpack stats: the script file would change since
      // hot module replacement is enabled in the development env
      webpackIsomorphicTools.refresh();
    }
    const client = new ApiClient(req);
    const store = createStore(client);
    const location = new Location(req.path, req.query);
    if (__DISABLE_SSR__) {
      res.send('<!doctype html>\n' +
        React.renderToString(<Html assets={webpackIsomorphicTools.assets()} component={<div/>} store={store}/>));
    } else {
      universalRouter(location, undefined, store)
        .then(({component, transition, isRedirect}) => {
          if (isRedirect) {
            res.redirect(transition.redirectInfo.pathname);
            return;
          }
          res.send('<!doctype html>\n' +
            React.renderToString(<Html assets={webpackIsomorphicTools.assets()} component={component} store={store}/>));
        })
        .catch((error) => {
          if (error.redirect) {
            res.redirect(error.redirect);
            return;
          }
          console.error('ROUTER ERROR:', pretty.render(error));
          res.status(500).send({error: error.stack});
        });
    }
  });
}
