const { response } = require('express');
var express = require('express');
var cookieParser = require('cookie-parser');
var db = require('./db');
var shortid = require('shortid');
var app = express();
var port = 3000;


var userRoutes = require('./route/route.user');
var authRoutes = require('./route/auth.router');
var productRoutes =require('./route/product.router');
var cartRoutes =require('./route/cart.router');

var bodyParser = require ('body-parser');
var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddlieware = require('./middlewares/sessions.middleware');

app.use(cookieParser('dadsadadda'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(sessionMiddlieware);

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');
app.get('/',authMiddleware.requireAuth, function( req, res){
res.render('index', {
    name: 'AAA'
});
});
app.use('/users',authMiddleware.requireAuth, userRoutes );
app.use('/auth', authRoutes );
app.use('/products', productRoutes );
app.use('/cart', cartRoutes)
app.listen(port,function(){
    console.log(' Sever listening on port ' + port)
});