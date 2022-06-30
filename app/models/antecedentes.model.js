const sql = require("./db.js");


const Antecedente = function(antecedentes) {
  this.id_antecedente = antecedente.idAntecedente;
  this.nome_antecedente = antecedente.nomeAntecedente;
};



Antecedente.getAll = result => {
  sql.query("SELECT * FROM antecedente", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};


Antecedente.antecedenteAleatoria = result => {
  sql.query("SELECT nomeAntecedente FROM antecedente ORDER BY RAND() LIMIT 1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};

module.exports = Antecedente;
