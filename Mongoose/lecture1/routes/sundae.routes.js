const SundaeController = require("../controllers/sundae.controller");

//add a new line for a new route
modeule.exports = app => {
    app.get("/api/test", SundaeController.testResponse);
}