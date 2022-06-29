const Classes = require("../models/classes.model.js");
const db = require("../models/db.js");


// Retorna todas as classes da tabela.
exports.findAll = (req, res) => {
  Classes.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Erro inesperado no sistema."
      });
    else res.send(data);
  });
};


// Retorna uma classe aleatória
exports.classeAleatoria = (req, res) => {
  Classes.classeAleatoria((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Erro inesperado no sistema."
      });
    else res.send(data);
  });
};

 
