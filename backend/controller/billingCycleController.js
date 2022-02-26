const connection = require("../database/connection");
module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query;
        const { limit = 5 } = request.query;
        const [count] = await connection('billingcycle').count();
        const billingcycles = await connection('billingcycle')
            .limit(limit)
            .offset((page - 1) * limit)
            .select('*');
        response.header('X-Total-Count', count['count(*)']); 
        return response.json({
          billingcycles, 
          count: count['count(*)'] / limit,
          currentPage: page
        });
    },

    async create(req, res){ 
      const { nome, mes, ano } = req.body; 

      connection('billingcycle').insert({ 
        nome, mes, ano 
      })
      .then(data => { 
        res.json({"ok": data});
      })
      .catch((err) => {  
        res.status(400).json(err);
      });
    },
    
    async update(req, res){ 
      const { nome, mes, ano } = req.body; 

      const data = await connection('billingcycle').update({ 
        nome, mes, ano 
      }).where('id', req.params.id);
 
      res.json({"ok": data});
    },

    async delete(req, res){  

      const data = await connection('billingcycle').delete().where('id', req.params.id);
      console.log(req.body);
      res.json({"ok": data});
    },
}