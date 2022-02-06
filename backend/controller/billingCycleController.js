const connection = require("../database/connection");
module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query;
        const { limit = 20 } = request.query;
        const [count] = await connection('billingcycle').count();
        const billingcycles = await connection('billingcycle')
            .limit(limit)
            .offset((page - 1) * limit)
            .select('*');
        response.header('X-Total-Count', count['count(*)']); 
        return response.json({
          billingcycles, 
          count: count['count(*)'] / limit
        });
    },
    async create(req, res){ 
      const { nome, mes, ano } = req.body; 

      const data = await connection('billingcycle').insert({ 
        nome, mes, ano 
      });

      //console.log(data.id);
      res.json({"ok": data});
    },
}