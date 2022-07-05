const FichaDnd = require("../models/fichaDnd.model.js");
const db = require("../models/db.js");


// Retorna todas as fichas da tabela.
exports.findAll = (req, res) => {
  FichaDnd.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Erro inesperado no sistema."
      });
    else res.send(data);
  });
};


// Retorna uma ficha aleatória
exports.fichaDndAleatoria = (req, res) => {
  FichaDnd.fichaDndAleatoria((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Erro inesperado no sistema."
      });
    else res.send(data);
  });
};

 
