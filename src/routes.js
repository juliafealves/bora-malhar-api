import { Router } from 'express';
import SessionController from './app/controllers/SessionController';

const routes = new Router();
routes.get('/', (req, res) => res.json({ ok: true }));
routes.post('/sessions', SessionController.store);

export default routes;
