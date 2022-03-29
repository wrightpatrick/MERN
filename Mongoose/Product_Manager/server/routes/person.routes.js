const PersonController = require('../controllers/person.controller');
 
module.exports = app => {
    app.get('/api/people', PersonController.findAllPeople);
    app.post('/api/person/new', PersonController.createNewPerson);
    app.get('/api/person/:_id', PersonController.findOneSinglePerson);
    app.patch('/api/person/:_id', PersonController.updateExistingPerson);
    app.delete('/api/person/:_id', PersonController.deleteAnExistingPerson);
}