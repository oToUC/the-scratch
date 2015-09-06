export default function loadAuth(req) {
  const passport = req.session.passport || {};

  return Promise.resolve(passport.user || req.session.user || null);
}
