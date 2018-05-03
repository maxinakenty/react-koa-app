import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import error from './error';
import { IS_DEVELOPMENT } from '../utils/env';

const initHandlers = app => {
  if (IS_DEVELOPMENT) {
    app.use(logger());
  }

  app.use(error());
  app.use(bodyParser());
};

export default initHandlers;
