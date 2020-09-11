const express = require('express');
const routes = express.Router();

const WordController = require('./controllers/WordController');

//O parametro REQ contém as informações da requisição realizada pelo navegador
//O resposta é a resposta que daremos à requisição


routes.get('/words', WordController.listWords);
routes.get('/word/:id', WordController.showWord);
routes.post('/word', WordController.createWord);
routes.put('/word/:id', WordController.updateWord);
routes.delete('/word/:id', WordController.removeWord);


module.exports = routes;