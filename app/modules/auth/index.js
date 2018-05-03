import Router from 'koa-router';
import { signUp } from './controllers/authController';

const router = new Router({ prefix: '/auth' });

router.post('/signup', signUp);

export default router.routes();
