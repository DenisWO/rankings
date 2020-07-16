import {Router} from 'express';

import UserController from './app/controllers/UserController';
import SessionController from  './app/controllers/SessionController';
import RankingController from './app/controllers/RankingController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (request, response) => {
  return response.json({
    message: 'Hello world'
  })
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/rankings', RankingController.store);

export default routes;