import mongoose from 'mongoose';

mongoose.Promise = Promise;

const mongooseConnector = mongoUri => {
  if (!mongoUri) throw new Error('Mongo uri is undefined');

  return mongoose.connect(mongoUri).then(() => {
    console.log('Mongo connected');
  });
};

export default mongooseConnector;
