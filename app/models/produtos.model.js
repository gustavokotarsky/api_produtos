const sql = require("./db.js");

// constructor
const Produtos = function(produtos) {
  this.id = produtos.id;
  this.nome = produtos.nome;
  this.preco = produtos.preco;
  this.peso = produtos.peso;
  this.unidade_medida = produtos.unidade_medida;
  this.categoria = produtos.categoria;
  this.cod_produto = produtos.cod_produto;
};

Produtos.create = (novoProduto, result) => {
  sql.query("INSERT INTO Produtos SET ?", novoProduto, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created produtos: ", { id: res.insertId, ...novoProduto });
    result(null, { id: res.insertId, ...novoProduto });
  });
};

Produtos.findById = (customerId, result) => {
  sql.query(`SELECT * FROM Produtos WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found produtos: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Produtos with the id
    result({ kind: "not_found" }, null);
  });
};

Produtos.getAll = result => {
  sql.query("SELECT * FROM Produtos", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Produtos: ", res);
    result(null, res);
  });
};
//nome = ?,preco =?, peso =?, unidade_medida =?, categoria =?, cod_produto =?
Produtos.updateById = (id, produtos, result) => {
  sql.query(
    "UPDATE Produtos SET nome = ?,preco =?, peso =?, unidade_medida =?, categoria =?, cod_produto =? WHERE id = ?",
    [produtos.nome, produtos.preco, produtos.unidade_medida,
    produtos.categoria, produtos. cod_produto, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Produtos with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated produtos: ", { id: id, ...produtos });
      result(null, { id: id, ...produtos });
    }
  );
};

Produtos.remove = (id, result) => {
  sql.query("DELETE FROM Produtos WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Produtos with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted produtos with id: ", id);
    result(null, res);
  });
};

Produtos.removeAll = result => {
  sql.query("DELETE FROM Produtos", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Produtos`);
    result(null, res);
  });
};

module.exports = Produtos;