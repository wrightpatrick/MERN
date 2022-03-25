const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
  app.get("/jokes", JokeController.findAllJokes);
  app.get("/jokes/:_id", JokeController.findOneSingleJoke);
  app.post("/jokes/new", JokeController.createNewJoke);
  app.patch("/jokes/update/:_id", JokeController.updateExistingJoke);
  app.delete("/jokes/delete/:_id", JokeController.deleteAnExistingJoke);
}

