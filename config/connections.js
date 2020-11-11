// require mysql
let mysql = require("mysql");
let connection;

// info on mysql

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 4000,
        user: "root",

        //Use your password for your local
        password: "password",
        database: "burgers_db"
    });
};

// Connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM 
module.exports = connection;