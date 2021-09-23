const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

require("./app/routes/produtos.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});