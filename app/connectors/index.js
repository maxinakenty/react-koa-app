const { MONGO_URI } = require('../config');
const mongooseConnector = require('./mongooseConnector');

const connectorsInit = () => {
  mongooseConnector(MONGO_URI);
};

module.exports = {
  mongooseConnector,
  connectorsInit,
};
