// Set up MySQL connection.
const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "burgers_db"
// });

const connection = mysql.createConnection({
  host: "xq7t6tasopo9xxbs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "fctlaxsnn2lo22m0",
  password: "dtt5945vxlos9ai2",
  database: "sk7pry6oaudpsu5z"
});

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.

module.exports = connection;
