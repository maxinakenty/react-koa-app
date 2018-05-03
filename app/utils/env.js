const envs = require('../constants/envs');

const ENV = process.env.NODE_ENV || 'development';
export const IS_DEVELOPMENT = ENV === envs.development;
export const IS_PRODUCTION = ENV === envs.production;

export default ENV;
