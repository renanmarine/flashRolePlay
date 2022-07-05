const sql = require("./db.js");


const FichaDnd = function(fichasDnd) {
  this.id_raca = fichasDnd.idRaca;
  this.id_classe = fichasDnd.idClasse;
  this.id_alinhamento = fichasDnd.idAlinhamento;
  this.id_antecedente = fichasDnd.idAntecedente;
};



FichaDnd.getAll = result => {
  sql.query("SELECT idRaca FROM fichaDnd WHERE idRaca is NOT NULL", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};


FichaDnd.fichaDndAleatoria = result => {
  sql.query("SELECT idRaca FROM fichaDnd WHERE idRaca is NOT NULL ORDER BY RAND() LIMIT 1;", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};

module.exports = FichaDnd;
