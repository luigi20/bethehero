const express = require('express');
const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/IncidentController');
const routes = express.Router();

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

routes.post('/sessions', SessionController.create);

routes.post('/incidents', IncidentController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);


routes.delete('/incidents/:id', IncidentController.delete);
module.exports = routes;