const { PORT } = require('./config');
const app = require('./app');

app.use(async ctx => {
  ctx.body = 'hello world';
});

app.listen(PORT);
