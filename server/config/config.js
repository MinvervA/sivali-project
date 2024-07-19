require("dotenv").config();

const {
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_DIALECT,
  DATABASE_TIMEZONE,
  DATABASE_PORT
} = process.env;

const config = {
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  host: DATABASE_HOST,
  dialect: DATABASE_DIALECT,
  port: DATABASE_PORT,
  timezone: DATABASE_TIMEZONE,
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
