var express = require('express');
var app = express();
var router = express.Router();
var controller = require('../controller/controll.user');
var db = require('../db');
var shortid = require('shortid');
var validate = require('../validate/user.validate.js');
var authMiddleware = require('../middlewares/auth.middleware')

router.get('/', controller.index);
router.get('/create', controller.create);
router.get('/cookie', function(req, res, next ){
    res.cookie('user-id', 123435678910);
    res.send('hello ');
});
router.post('/create', validate.postCreate, controller.postCreate);
router.get('/:id', controller.id);
router.get('/search', controller.search);

module.exports = router;