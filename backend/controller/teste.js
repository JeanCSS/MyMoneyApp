module.exports = {
    index(req, res){
        console.log(req.params);
        res.send('<h1> Hello ' + req.params.nome+ '</h1>');
    }
}