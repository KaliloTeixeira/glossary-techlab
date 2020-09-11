require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const uri = process.env.MONGO_URL;

//  Iniciando o APP
const app = express();
app.use(express.json()); // Permitir que eu envie dados para a aplicação no formato de json
app.use(cors());

// Iniciando o DB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
requireDir('./src/models');

// Rotas
app.use('/', require('./src/routes'));

app.listen(process.env.PORT || 3001);