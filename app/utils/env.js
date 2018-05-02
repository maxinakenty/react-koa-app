const envs = require('../constants/envs');

const ENV = process.env.NODE_ENV || 'development';
const IS_DEVELOPMENT = ENV === envs.development;
const IS_PRODUCTION = ENV === envs.production;

module.exports = {
  ENV,
  IS_DEVELOPMENT,
  IS_PRODUCTION,
};
