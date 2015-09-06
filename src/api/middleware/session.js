import session from 'express-session';

export default function sessionMiddleware(app) {
  const CouchbaseStore = require('connect-couchbase')(session);
  var couchbaseStore = new CouchbaseStore({
    bucket:"default",                //optional
    host:"localhost:8091",           //optional
    connectionTimeout: 10 * 1000,
    durabilityTimeout: 60 * 1000,
    managementTimeout: 60 * 1000,
    nodeConnectionTimeout: 10 * 1000,
    operationTimeout: 10 * 1000,
    viewTimeout: 10 * 1000
  });

  // TODO: Make session storage configurable
  app.use(session({
    store: couchbaseStore,
    secret: 'react and redux rule!!!!',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 },
    rolling: true
  }));
}
