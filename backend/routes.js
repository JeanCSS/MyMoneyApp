const express = require('express');
const billingCycleController = require('./controller/billingCycleController');

const routes = express.Router();

routes.get('/', (req, res) =>{
    console.log(req.params);
    res.json({credito: 1032078000, debito: 102000});
});

routes.post('/billingCycle', billingCycleController.create);
routes.put('/billingCycle/:id', billingCycleController.update);
routes.get('/billingCycle', billingCycleController.index);
routes.delete('/billingCycle/:id', billingCycleController.delete);

module.exports  = routes;