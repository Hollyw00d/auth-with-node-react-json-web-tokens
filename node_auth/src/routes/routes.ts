import { Router } from 'express';
import AuthControllers from '../controller/auth.controller';
import { ResetPasswordControllers } from '../controller/reset-password.controller';

const authControllers = new AuthControllers();
const resetPasswordControllers = new ResetPasswordControllers();

const routes = (router: Router) => {
  router.post('/api/register', authControllers.register);
  router.post('/api/login', authControllers.login);
  router.get('/api/user', authControllers.authenticatedUser);
  router.post('/api/refresh', authControllers.refresh);
  router.post('/api/logout', authControllers.logout);
  router.post('/api/forgot', resetPasswordControllers.forgot);
  router.post('/api/reset', resetPasswordControllers.reset);
};

export default routes;
