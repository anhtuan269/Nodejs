const { response } = require('express');
var express = require('express');
var app = express();
var port = 3000;
var shortid = require('shortid');
var db = require('./db');
var userRoutes = require('./route/route.user');
var bodyParser = require ('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', function( req, res){
res.render('index', {
    name: 'AAA'
});
});
app.use('/users', userRoutes );
app.listen(port,function(){
    console.log(' Sever listening on port ' + port)
});




