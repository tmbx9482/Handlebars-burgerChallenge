//Import the ORM 
let orm = require("../config/orm.js");

// Burger object
let burger = {
    // Taking all the data from seeds.db 
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    // cols and vals beening executed from data entries
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    // object keys with respective values are conitional condition.
    // mix and match up new methods
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;