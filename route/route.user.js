var express = require('express');
var app = express();
var router = express.Router();
var controller = require('../controller/controll.user');
var db = require('../db');
var shortid = require('shortid');

router.get('/', controller.index);
router.get('/create', function(req, res ){
    res.render('users/create');
});
router.post('/create',controller.create );
router.get('/:id', controller.id);
router.get('/search',controller.search);

module.exports = router;