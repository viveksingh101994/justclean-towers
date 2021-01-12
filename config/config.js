module.exports = {
  PORT: process.env.PORT || '3000',
  DB: {
    USER: process.env.DB_USER || 'justclean-test',
    NAME: process.env.DB_NAME || 'justclean',
    PASS: process.env.DB_PASS || '12345',
    HOST: process.env.DB_HOST || 'localhost',
  },
  NODE_ENV: process.env.NODE_ENV || 'test',
  JWT: {
    SECRET: process.env.JWT_SECRET || 'test',
    ISSUER: process.env.JWT_ISSUER || 'just-clean',
    EXPIRY: process.env.JWT_EXPIRY_TIME_IN_SEC || '4000',
  },
};
