import api from './api';
import root from './root';

export default function initializeRoutes(app) {
  api(app);
  root(app);
};
