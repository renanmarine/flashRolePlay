module.exports = app => {
  const alinhamentos = require("../controllers/alinhamentos.controller.js");

  app.get("/alinhamentos/findAll", alinhamentos.findAll);

  app.get("/alinhamentos/aleatorias", alinhamentos.alinhamentoAleatoria);

};
