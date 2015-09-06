import passport from 'passport';
import auth from '../auth';

export default function authMiddleware(app) {
  console.log('Initializing passport');

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  auth(app);
}
