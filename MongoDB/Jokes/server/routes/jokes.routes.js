const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
  app.get("/jokes", JokeController.findAllJokes);
  app.get("/jokes/:id", JokeController.findOneSingleJoke);
  app.post("/jokes/new", JokeController.createNewJoke);
  app.put("/jokes/update/:id", JokeController.updateExistingJoke);
  app.delete("/jokes/delete/:id", JokeController.deleteAnExistingJoke);
}

