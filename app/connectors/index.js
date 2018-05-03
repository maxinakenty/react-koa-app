import { MONGO_URI } from '../config';
import mongooseConnector from './mongooseConnector';
import server from '../server';

const connectorsInit = async () => {
  try {
    await mongooseConnector(MONGO_URI);
  } catch (err) {
    server.close();
    console.error(err);
  }
};

export { mongooseConnector };

export default connectorsInit;
