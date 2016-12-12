BEGIN;

-- deploying schema to heroku
-- `heroku pg:psql --app react-paint < db/schema.sql`

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  private_key VARCHAR NOT NULL,
  public_key VARCHAR NOT NULL,
  created_at TIMESTAMP DEFAULT current_timestamp
);

INSERT INTO
  users(username,password, private_key, public_key)
VALUES
  ('test', 'test','private_key','public_key');

COMMIT;
