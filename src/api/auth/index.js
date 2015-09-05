import passport from 'passport';
import FacebookStrategy from 'passport-facebook';

export default function authRoute(app) {
  console.log('Initializing passport routes!');

  passport.use(new FacebookStrategy(
    {
      clientID: '778608158855551',
      clientSecret: '03fa4c0d237ceb18908a6e6226d7a1dd',
      callbackURL: '/auth/facebook/callback',
      scope: ['email'],
      passReqToCallback: true,
      enableProof: false
    },
    (req, accessToken, refreshToken, profile, done) => {
      done(null, {user: 'tomas'});
    }
  ));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: 'http://localhost:3000/',
      failureRedirect: 'http://localhost:3000/'
    })
  );

  app.get('/auth/facebook', passport.authenticate('facebook'));
}
