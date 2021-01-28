const { response } = require('express');
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
var port = 3000;
var shortid = require('shortid');
var db = require('./db');
var userRoutes = require('./route/route.user');
var authRoutes = require('./route/auth.router');
var productRoutes =require('./route/product.router');
var bodyParser = require ('body-parser');
var authMiddleware = require('./middlewares/auth.middleware');
app.use(cookieParser());
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
app.use('/users',authMiddleware.requireAuth, userRoutes );
app.use('/auth', authRoutes );
app.use('/products', productRoutes );

app.listen(port,function(){
    console.log(' Sever listening on port ' + port)
});