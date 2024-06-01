const { Pool } = require("pg");

const pool = new Pool({
  user: 'postgres',
  port: '5432',
  database: 'restapi',
  password: 'kitten1998',
  host: 'localhost',
});

module.exports = pool;