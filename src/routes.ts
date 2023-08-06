import {Router} from 'express';
import {AuthControllers} from './controller/auth.controller';
import { ForgotControllers } from './controller/forgot.controller';
const authControllers = new AuthControllers();
const forgotControllers = new ForgotControllers();

export const routes = (router: Router) => {
 router.post('/api/register', authControllers.register);
 router.post('/api/login', authControllers.login);
 router.get('/api/user', authControllers.authenticatedUser);
 router.post('/api/refresh', authControllers.refresh);
 router.post('/api/logout', authControllers.logout);
 router.post('/api/forgot', forgotControllers.forgot);
};
