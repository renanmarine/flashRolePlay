module.exports = app => {
  const racas = require("../controllers/racas.controller.js");

  app.get("/racas/findAll", racas.findAll);

  app.get("/racas/aleatorias", racas.racaAleatoria);

};
