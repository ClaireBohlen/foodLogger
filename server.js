const express = require("express");
const bars = require("express-handlebars");
const mysql = require("mysql");

const PORT = process.env.PORT || 8080; 

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handle Bars setup
app.engine("handlebars", bars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes from controller
const routes = require("./controllers/burgers_controller.js/");

app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on http://localhost:" + PORT )
});