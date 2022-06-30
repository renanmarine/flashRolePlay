const Alinhamentos = require("../models/alinhamentos.model.js");
const db = require("../models/db.js");


// Retorna todas as raças da tabela.
exports.findAll = (req, res) => {
  Alinhamentos.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Erro inesperado no sistema."
      });
    else res.send(data);
  });
};


// Retorna uma raça aleatória
exports.alinhamentoAleatoria = (req, res) => {
  Alinhamentos.alinhamentoAleatoria((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Erro inesperado no sistema."
      });
    else res.send(data);
  });
};

 
