import {Router} from 'express';
import {Controllers} from './controller/auth.controller';
const controllers = new Controllers();

export const routes = (router: Router) => {
 router.post('/api/register', controllers.register);
 router.post('/api/login', controllers.login);
 router.get('/api/user', controllers.authenticatedUser);
 router.post('/api/refresh', controllers.refresh);
 router.post('/api/logout', controllers.logout);
};
