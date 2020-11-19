
// Require Express
let express = require("express");
// Local Host connection
let PORT = process.env.PORT || 4000;
// defining express name
let app = express();

//static content from the "public" directory is enable for app.
// app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

// Parse application => JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Hello Handlebars!
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Having the routes import the server.js
let routes = require('./controllers/burgers_controller');

app.use(routes);

// Start server + begin listening to client requests = at PORT 4000!
app.listen(PORT, function () {
  // console.log to test to connection
  console.log("Server listening on: http://localhost:" + PORT);
});
