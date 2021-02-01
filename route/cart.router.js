var express = require('express');

var controller = require('../controller/cart.controller');

var router = express.Router();
var cookieParser = require('cookie-parser');


router.get('/add/:productId', controller.addToCart );

module.exports = router;