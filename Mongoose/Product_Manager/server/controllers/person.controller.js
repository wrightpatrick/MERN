const Person = require('../models/person.model');
 

module.exports.createNewPerson = (req, res) => {
    Person.create(req.body)
        .then(newlyCreatedPerson => res.json({ person: newlyCreatedPerson }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findAllPeople = (req, res) => {
    Person.find()
        .then(allPersons => res.json({ persons: allPersons }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.findOneSinglePerson = (req, res) => {
    Person.findOne({ _id: req.params.id })
        .then(oneSinglePerson => res.json({ person: oneSinglePerson }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingPerson = (req, res) => {
    Person.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPerson => res.json({ person: updatedPerson }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingPerson = (req, res) => {
    Person.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}