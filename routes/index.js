var express=require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index.html');
});

router.get('/home/', function(req, res, next){
    res.render('index.html');
});

router.get('/servicos/', function(req, res, next){
    res.render('index.html');
});

router.get('/sobrenos/', function(req, res, next){
    res.render('index.html');
});

router.get('/fa/', function(req, res, next){
    res.render('index.html');
});

router.get('/empresas/', function(req, res, next){
    res.render('index.html');
});

router.get('/login/', function(req, res, next){
    res.render('index.html');
});

router.get('/logout/', function(req, res, next){
    res.render('index.html');
});

router.get('/registar/', function(req, res, next){
    res.render('index.html');
});



module.exports = router;