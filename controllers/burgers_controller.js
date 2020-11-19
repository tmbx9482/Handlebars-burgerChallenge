// install express
let express = require("express");
// express router
let router = express.Router();
// Import the model "burger.js"
let burger = require("../models/burger.js")

// create API routes
router.get("/", function (req, res) {
    res.redirect("/burgers");
});

// GET
router.get("/burgers", function (req, res) {
    burger.all(function (burgerData) {
        res.render("index", { burger_data: burgerData });
    });
});

// POST
router.post("/burgers/insertOne", function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect("/");
    });
});

// PUT
router.put("/burgers/:id", function (req, res) {
    burger.updateOne(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;
