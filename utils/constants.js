const {
  PORT = 3000,
  NODE_ENV,
  MONGODB_ADDRESS,
} = process.env;

const mongoDBAddress = NODE_ENV === 'production' ? MONGODB_ADDRESS : 'mongodb://127.0.0.1:27017/bitfilmsdb';

module.exports = {
  mongoDBAddress,
  PORT,
};
