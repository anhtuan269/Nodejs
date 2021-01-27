var express = require('express');
var app = express();
var router = express.Router();
var controller = require('../controller/controll.user');
var db = require('../db');
var shortid = require('shortid');
var validate = require('../validate/user.validate.js');

router.get('/', controller.index);
router.get('/create', controller.create);
router.post('/create', validate.postCreate, controller.postCreate);
router.get('/:id', controller.id);
router.get('/search', controller.search);

module.exports = router;