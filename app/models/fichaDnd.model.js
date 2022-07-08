const sql = require("./db.js");
//>>>>import do models ja existentes<<<<<<<<
const Racas = require("../models/racas.model.js");
const Classes = require("../models/classes.model.js");
const Alinhamentos = require("../models/alinhamentos.model.js");
const Antecedentes = require("../models/alinhamentos.model.js");
const Atributos = require("../models/atributos.model.js")


//aqui eu declarei os campos do model do tipo dos models ja existentes para não ter retrabalho
const FichaDnd = function(fichasDnd) {
  this.raca = Racas;
  this.classe = Classes;
  this.alinhamento = Alinhamentos;
  this.Antecedentes = Antecedentes;
  this.atributo = Atributos;
};



FichaDnd.getAll = result => {
  sql.query("SELECT * FROM racas, classes, antecedente, alinhamento", (err, res) => {
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
  sql.query("SELECT * FROM racas, classes, antecedente, alinhamento ORDER BY RAND() LIMIT 1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    var ficha = {};
    var raca = {};
    var classe = {};
    var alinhamento = {};
    var antecedente = {};
    var atributo = {};

    raca.id = res[0].id;
    raca.nomeRaca = res[0].nomeRaca;
    classe.idClasse = res[0].idClasse;
    classe.nomeClasse = res[0].nomeClasse;
    alinhamento.idAlinhamento = res[0].idAlinhamento;
    alinhamento.nomeAlinhamento = res[0].nomeAlinhamento;
    antecedente.idAntecedente = res[0].idAntecedente;
    antecedente.nomeAntecedente = res[0].nomeAntecedente;
    atributo.atributos = res[0].atributos;

    ficha.raca = raca;
    ficha.classe = classe;
    ficha.alinhamento = alinhamento;
    ficha.antecedente = antecedente;
    ficha.atributo = atributo;



    result(null, ficha);
  });
};

module.exports = FichaDnd;
