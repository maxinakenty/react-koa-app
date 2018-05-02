const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const error = require('./error');
const { IS_DEVELOPMENT } = require('../utils/env');

const initHandlers = app => {
  if (IS_DEVELOPMENT) {
    app.use(logger());
  }

  app.use(error());
  app.use(bodyParser());
};

module.exports = initHandlers;
