const sql = require("./db.js");


const Classe = function(classes) {
  this.id_classe = classes.idClasse;
  this.nome_classe = classes.nomeClasse;
};



Classe.getAll = result => {
  sql.query("SELECT * FROM classes", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};


Classe.classeAleatoria = result => {
  sql.query("SELECT nomeClasse FROM classes ORDER BY RAND() LIMIT 1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};

module.exports = Classe;
