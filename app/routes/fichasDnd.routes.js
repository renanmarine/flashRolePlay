module.exports = app => {
  const fichasDnd = require("../controllers/fichaDnd.controller.js");

  app.get("/fichasDnd/findAll", fichasDnd.findAll);

  app.get("/fichasDnd/aleatorias", fichasDnd.fichaDndAleatoria);

};
