import { PORT } from './config';
import app from './app';

app.use(async ctx => {
  ctx.body = 'hello world';
});

app.listen(PORT);
