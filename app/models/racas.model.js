const sql = require("./db.js");


const Raca = function(racas) {
  this.id_raca = racas.id;
  this.nome_raca = racas.nomeRaca;
};



Raca.getAll = result => {
  sql.query("SELECT * FROM racas", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};


Raca.racaAleatoria = result => {
  sql.query("SELECT nomeRaca FROM racas ORDER BY RAND() LIMIT 1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};

module.exports = Raca;
