module.exports = app => {
    const classes = require("../controllers/classes.controller.js");
  
    app.get("/classes/findAll", classes.findAll);
  
    app.get("/classes/aleatorias", classes.classeAleatoria);
  
  };
  