import dotenv from 'dotenv';
dotenv.config();

const ENV = {
  PORT: process.env.PORT || 3000,
  CLIENT_URL: process.env.CLIENT_URL,
  MONGO_URI: process.env.MONGO_URI,
};

export default ENV;
