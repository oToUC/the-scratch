import passport from 'passport';
import auth from '../auth';

export default function authMiddleware(app) {
  console.log('Initializing passport');

  app.use(passport.initialize());
  app.use(passport.session());

  auth(app);
}
