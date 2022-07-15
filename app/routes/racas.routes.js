module.exports = app => {
  const racas = require("../controllers/racas.controller.js");

  app.get("/racas/findAll", racas.findAll);

  app.get("/racas/aleatorias", racas.racaAleatoria);

  const alinhamentos = require("../controllers/alinhamentos.controller.js");

  app.get("/alinhamentos/findAll", alinhamentos.findAll);

  app.get("/alinhamentos/aleatorias", alinhamentos.alinhamentoAleatoria);

  const antecedentes = require("../controllers/antecedentes.controller.js");
  
    app.get("/antecedentes/findAll", antecedentes.findAll);
  
    app.get("/antecedentes/aleatorias", antecedentes.antecedenteAleatoria);

    const classes = require("../controllers/classes.controller.js");
  
    app.get("/classes/findAll", classes.findAll);
  
    app.get("/classes/aleatorias", classes.classeAleatoria);

    const fichasDnd = require("../controllers/fichaDnd.controller.js");

  app.get("/fichasDnd/findAll", fichasDnd.findAll);

  app.get("/fichasDnd/aleatorias", fichasDnd.fichaDndAleatoria);
  



};
