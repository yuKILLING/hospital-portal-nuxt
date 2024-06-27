const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "INxCnbSWrTxasdjlAWLsbhLNcOBnCusY",
  host: "roundhouse.proxy.rlwy.net",
  port: 59514,
  database: "railway",
});

// const pool = new Pool({
//   user: "postgres",
//   password: "alisher11",
//   host: "localhost",
//   port: 5432,
//   database: "HospitalProject",
// });

// module.exports = pool;
