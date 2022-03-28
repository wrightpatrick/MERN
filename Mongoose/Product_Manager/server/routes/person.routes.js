const PersonController = require('../controllers/person.controller');
 
module.exports = app => {
    app.get('/api/people', PersonController.findAllPeople);
    app.get('/api/person/:id', PersonController.findOneSinglePerson);
    app.patch('/api/person/:id', PersonController.updateExistingPerson);
    app.post('/api/person/new', PersonController.createNewPerson);
    app.delete('/api/person/:id', PersonController.deleteAnExistingPerson);
}