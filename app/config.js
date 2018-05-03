import dotenv from 'dotenv';
import config from 'config';
import envs from './constants/envs';
import ENV from './utils/env';

dotenv.config();

if (!envs[ENV]) {
  throw new Error(`Unknown env "${ENV}"`);
}

export const PORT = process.env.PORT || config.get('port');
export const MONGO_URI = process.env.MONGO_URI || config.get('mongo.uri');
