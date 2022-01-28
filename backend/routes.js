const express = require('express');
const teste = require('./controller/teste');

const routes = express.Router();

routes.get('/', (req, res) =>{
    console.log(req.params);
    res.json({credito: 1032078000, debito: 102000});
});

module.exports  = routes;