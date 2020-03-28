/*
    Tipos de parametros

    Query Param : Parametros nomeados enviados na rota após "?"
    Route Param : Utilizados para identificar recursos
    Request Body : Utilizado para criar ou alterar recursos
*/

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);