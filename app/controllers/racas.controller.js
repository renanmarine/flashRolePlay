const Racas = require("../models/racas.model.js");
const db = require("../models/db.js");


// Retorna todas as raças da tabela.
exports.findAll = (req, res) => {
  Racas.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Erro inesperado no sistema."
      });
    else res.send(data);
  });
};


// Retorna uma raça aleatória
exports.racaAleatoria = (req, res) => {
  Racas.racaAleatoria((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Erro inesperado no sistema."
      });
    else res.send(data);
  });
};

 
