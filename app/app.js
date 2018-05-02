const Koa = require('koa');
const { connectorsInit } = require('./connectors');
const initHandlers = require('./handlers');
const modules = require('./modules');

connectorsInit();
const app = new Koa();
initHandlers(app);
app.use(modules);

module.exports = app;
