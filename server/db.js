const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "INxCnbSWrTxasdjlAWLsbhLNcOBnCusY",
  host: "roundhouse.proxy.rlwy.net",
  port: 59514,
  database: "railway",
});

module.exports = pool;
