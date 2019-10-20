import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Bruno Sampaio',
    email: 'brunojsampaio@gmail.com',
    password_hash: '12345678',
  });
  res.json(user);
});

export default routes;
