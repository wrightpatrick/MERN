const Person = require('../models/person.model');
 
// create  new person
module.exports.createNewPerson = (req, res) => {
    Person.create(req.body)
        .then(newlyCreatedPerson => res.json({ person: newlyCreatedPerson }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// find all people
module.exports.findAllPeople = (req, res) => {
    Person.find()
        .then(allPersons => res.json({ persons: allPersons }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// find one single person
module.exports.findOneSinglePerson = (req, res) => {
    console.log({ _id: req.params._id });
    Person.findOne({ _id: req.params._id })
        .then(oneSinglePerson => res.json({ person: oneSinglePerson }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// update existing person
module.exports.updateExistingPerson = (req, res) => {
    Person.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPerson => res.json({ person: updatedPerson }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// delete existing person 
module.exports.deleteAnExistingPerson = (req, res) => {
    Person.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}