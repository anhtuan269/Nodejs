var express = require('express');
var app = express();
var router = express.Router();
var controller = require('../controller/controll.user');
var db = require('../db');
var shortid = require('shortid');

router.get('/', controller.index);
router.get('/create', controller.create);
router.post('/create', controller.postCreate);
router.get('/:id', controller.id);
router.get('/search', controller.search);

module.exports = router;