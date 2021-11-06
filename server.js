/*const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3000;

// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello world" });
});

require("./app/routes/produtos.routes.js")(app);

// set port, listen for requests
app.listen(port, () => {
  console.log("Server is running on port 3000.");
});*/
const app = require('./app/app');
 //const PORT = process.env.PORT || 3000;
 app.listen(process.env.PORT || 3000, () => {
    console.log('Listening in port ');
 });