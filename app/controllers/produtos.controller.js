const Produtos = require("../models/produtos.model.js");

// Create and Save a new Produtos
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Produtos
    const produtos = new Produtos({
      id: req.body.id,
      nome: req.body.nome,
      preco: req.body.preco,
      peso: req.body.peso,
      unidade_medida: req.body.unidade_medida,
      categoria: req.body.categoria,
      cod_produto: req.body.cod_produto
    });
  
    // Save Produtos in the database
    Produtos.create(produtos, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Produtos."
        });
      else res.send(data);
    });
  };

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Produtos.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };

// Find a single Produtos with a customerId
exports.findOne = (req, res) => {
    Produtos.findById(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Produtos with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Produtos with id " + req.params.customerId
          });
        }
      } else res.send(data);
    });
  };

// Update a Produtos identified by the customerId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Produtos.updateById(
      req.params.customerId,
      new Produtos(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Produtos with id ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Produtos with id " + req.params.customerId
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a Produtos with the specified customerId in the request
exports.delete = (req, res) => {
    Produtos.remove(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Produtos with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Produtos with id " + req.params.customerId
          });
        }
      } else res.send({ message: `Produtos was deleted successfully!` });
    });
  };

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Produtos.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all customers."
        });
      else res.send({ message: `All Customers were deleted successfully!` });
    });
  };