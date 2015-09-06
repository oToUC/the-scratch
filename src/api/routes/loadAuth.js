export default function loadAuth(req) {
  return Promise.resolve(req.session.passport.user || req.session.user || null);
}
