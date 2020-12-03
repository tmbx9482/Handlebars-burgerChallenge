// Import MySQL connection.
let connection = require("../config/connections");

// Function for generating mysql 
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// Object for all statement functions
let orm = {
    //function to return all entries within table
    selectAll: function (tableInput, cb) {
        let sqlString = "SELECT * FROM " + tableInput + ";";
        console.log(sqlString);
        connection.query(sqlString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    //Insert a burger of your chosing
    insertOne: function (table, cols, vals, cb) {
        // query string  inserts a burger
        var sqlString = "INSERT INTO " + table;

        sqlString += " (";
        sqlString += cols.toString();
        sqlString += ") ";
        sqlString += "VALUES (";
        sqlString += printQuestionMarks(vals.length);
        sqlString += ") ";
        console.log(sqlString);

        // Gathers the database query
        connection.query(sqlString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            // return results in callback
            cb(result);
        });
    },

    // Makes updates to burger
    updateOne: function (table, objColVals, condition, cb) {
        // query string that updates a burger
        var sqlString = "UPDATE " + table;

        sqlString += " SET ";
        sqlString += objToSql(objColVals);
        sqlString += " WHERE ";
        sqlString += condition;
        console.log(sqlString);

        // Perform the database query
        connection.query(sqlString, function (err, result) {
            if (err) {
                throw err;
            }

            //  Callback Results
            cb(result);
        });
    },
};


// export the object
module.exports = orm;