module.exports = app => {
    const antecedentes = require("../controllers/antecedentes.controler.js");
  
    app.get("/antecedentes/findAll", antecedentes.findAll);
  
    app.get("/antecedentes/aleatorias", antecedentes.antecedenteAleatoria);
  
  };
