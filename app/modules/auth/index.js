const Router = require('koa-router');
const authController = require('./controllers/authController');

const router = new Router({ prefix: '/auth' });

router.post('/signup', authController.signUp);

module.exports = router.routes();
