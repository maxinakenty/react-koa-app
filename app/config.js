const config = require('config');
const envs = require('./constants/envs');
const dotenv = require('dotenv');
const { ENV } = require('./utils/env');

dotenv.config();

if (!envs[ENV]) {
  throw new Error(`Unknown env "${ENV}"`);
}

const PORT = process.env.PORT || config.get('port');
const MONGO_URI = process.env.MONGO_URI || config.get('mongo.uri');

module.exports = {
  PORT,
  MONGO_URI,
};
