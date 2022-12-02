// Add packages
require("dotenv").config();
// Add database package and connection string
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

sql = "SELECT * FROM product";
pool.query(sql, [], (err, res) => {
  console.log(err, res)
});
