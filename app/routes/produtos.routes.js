module.exports = app => {
    const produtos = require("../controllers/produtos.controller.js");
  
    // Create a new Customer
    app.post("/produtos", produtos.create);
  
    // Retrieve all Customers
    app.get("/produtos", produtos.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/produtos/:customerId", produtos.findOne);
  
    // Update a Customer with customerId
    app.put("/produtos/:customerId", produtos.update);
  
    // Delete a Customer with customerId
    app.delete("/produtos/:customerId", produtos.delete);
  
    // Create a new Customer
    app.delete("/produtos", produtos.deleteAll);
  };