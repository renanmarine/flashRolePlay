const sql = require("./db.js");


const Alinhamento = function(alinhamentos) {
  this.id_alinhamento = alinhamentos.idAlinhamento;
  this.nome_alinhamento = alinhamentos.nomeAlinhamento;
};



Alinhamento.getAll = result => {
  sql.query("SELECT * FROM alinhamentos", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};


Alinhamento.alinhamentoAleatoria = result => {
  sql.query("SELECT nomeAlinhamento FROM alinhamento ORDER BY RAND() LIMIT 1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};

module.exports = Alinhamento;
