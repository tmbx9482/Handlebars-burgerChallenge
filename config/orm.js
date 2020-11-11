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

// Object for all our sql statement functions
let orm = {
    //function to return all entries within table
    selectAll: function (tableInput, cb) {
        //returns all rows from table
        var queryString = "SELECT * FROM " + tableInput + ";";
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    //Insert a burger of your chosing
    insertOne: function (table, cols, vals, cb) {
        // query string that inserts a burger row into table
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        console.log(queryString);

        // Gathers the database query
        connection.query(queryString, vals, function (err, result) {
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
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);

        // Perform the database query
        connection.query(queryString, function (err, result) {
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