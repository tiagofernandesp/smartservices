var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var servicos = require('./routes/servicos');
var users = require('./routes/users');

var port=3000;
var app= express();

//view Engine

app.set('views', path.join(__dirname,''));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//static folder
app.use(express.static(path.join(__dirname,'src')));

//body parse mw
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/servicos',servicos);
app.use('/users',users);

app.listen(port, function(){
    console.log('server is runing on port'+port);
})