import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ message: 'temos um sonho' }));

export default routes;
