import httpProxy from 'http-proxy';

import config from '../../config';

export default function apiRoute(app) {
  const proxy = httpProxy.createProxyServer({
    target: 'http://localhost:' + config.apiPort
  });

  // added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
  proxy.on('error', (error, req, res) => {
    let json;
    console.log('proxy error', error);
    if (!res.headersSent) {
      res.writeHead(500, {'content-type': 'application/json'});
    }

    json = { error: 'proxy_error', reason: error.message };
    res.end(JSON.stringify(json));
  });

  // Proxy to API server
  app.use('/api', (req, res) => {
    proxy.web(req, res);
  });
}
