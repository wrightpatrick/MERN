const Joke = require('../models/jokes.model');

// find all
module.exports.findAllJokes = (req, res) => {
    Joke.find({})
        .then(results => res.json({ jokes: results }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
}

// find one by ID param
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// create new document
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// update existing document
module.exports.updateExistingJoke = (req, res) => {
 Joke.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
     .then(updatedJoke => res.json({ joke: updatedJoke }))
     .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// destroy document
module.exports.deleteAnExistingJoke = (req, res) => {
 Joke.deleteOne({ _id: req.params._id })
     .then(result => res.json({ result: result }))
     .catch(err => res.json({ message: "Something went wrong", error: err }));
}
