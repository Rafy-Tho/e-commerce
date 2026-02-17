import dotenv from 'dotenv';
dotenv.config();

const ENV = {
  PORT: process.env.PORT || 5000,
  CLIENT_URL: process.env.CLIENT_URL,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  URL: process.env.URL,
};

export default ENV;
