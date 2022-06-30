const Antecedentes = require("../models/antecedentes.model.js");
const db = require("../models/db.js");


// Retorna todas os antecedentes da tabela.
exports.findAll = (req, res) => {
  Antecedentes.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Erro inesperado no sistema."
      });
    else res.send(data);
  });
};


// Retorna um antecedente aleatório
exports.antecedenteAleatoria = (req, res) => {
  Antecedentes.antecedenteAleatoria((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Erro inesperado no sistema."
      });
    else res.send(data);
  });
};

 
