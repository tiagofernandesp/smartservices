var express=require('express');
var router = express.Router();
var mongojs =require('mongojs');
var db = mongojs('mongodb://admin:admin@ds127928.mlab.com:27928/dbservicos' , ['servicos']);


//all servicos
router.get('/servicos', function(req, res, next){
    db.servicos.find(function(err, servicos)
    	{
    		if(err){
    			res.send(err);
    		}
    		res.json(servicos);
    	});
});

//1 servico by id
router.get('/servico/:id', function(req, res, next){
    db.servicos.findOne({_id:mongojs.ObjectId(req.params.id)},function(err, servico)
    	{
    		if(err){
    			res.send(err);
    		}
    		res.json(servico);
    	});
});

//save servico
router.post('/servico', function(req, res,next){
 var servico = req.body;
 if(!servico.titulo){
 	res.status(400);
 } else{
 	db.servicos.save(servico, function(err,servico){
 		if(err){
    			res.send(err);
    		}
    		res.json(servico);
 	});
 }
});

//delete 1 servico by id
router.delete('/servico/:id', function(req, res, next){
    db.servicos.remove({_id:mongojs.ObjectId(req.params.id)},function(err, servico)
    	{
    		if(err){
    			res.send(err);
    		}
    		res.json(servico);
    	});
});

//update 1 servico by id
router.put('/servico/:id', function(req, res, next){
	var servico=req.body;
	var updServico={};

	//validacoes
	if(servico.titulo){
		updServico.titulo=servico.titulo;
		updServico.corpo=servico.corpo;
		updServico.categoria_id=servico.categoria_id;
		updServico.user_id=servico.user_id;
	}

	//validar novo obj
	if(!updServico){
		res.status(400);
		res.json({
			"error":"bad data"
		});
	}else{
		db.servicos.update({_id:mongojs.ObjectId(req.params.id)},updServico , {},function(err, servico)
    	{
    		if(err){
    			res.send(err);
    		}
    		res.json(servico);
    	});
	}
    
});

module.exports = router;