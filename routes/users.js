var express=require('express');
var router = express.Router();
var mongojs =require('mongojs');
var db = mongojs('mongodb://admin:admin@ds127928.mlab.com:27928/dbservicos' , ['users']);

//all users
router.get('/users', function(req, res, next){
    db.users.find(function(err, users)
        {
            if(err){
                res.send(err);
            }
            res.json(users);
        });
});

//1 user by id
router.get('/user/:nome&:pw', function(req, res, next){
    console.log(req.params.pw)
    db.users.findOne({nome:req.params.nome, pw:req.params.pw},function(err, user)
    	{
    		if(err){
    			res.send(err);
    		}
    		res.json(user);
    	});
});

module.exports = router;