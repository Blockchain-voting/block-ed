const pgp = require('pg-promise')({});

//deploying schema to heroku
// heroku pg:psql --app react-paint < db/schema.sql

const config = process.env.DATABASE_URL || {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   process.env.DB_NAME,
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS,
};

const sqlDB = pgp(config);

module.exports = {
  sqlDB,
};
