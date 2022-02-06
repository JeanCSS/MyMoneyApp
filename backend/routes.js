const express = require('express');
const billingCycleController = require('./controller/billingCycleController');

const routes = express.Router();

routes.get('/', (req, res) =>{
    console.log(req.params);
    res.json({credito: 1032078000, debito: 102000});
});
routes.post('/billingCycle', billingCycleController.create);
routes.get('/billingCycle', billingCycleController.index);

module.exports  = routes;