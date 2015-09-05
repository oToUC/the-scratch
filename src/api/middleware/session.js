import session from 'express-session';

export default function sessionMiddleware(app) {
  // TODO: Make session storage configurable
  app.use(session({
    secret: 'react and redux rule!!!!',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }));
}
