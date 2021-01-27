var express = require('express');
var app = express();
const router = express.Router();
var controller = require('../controller/auth.controller');
router.get('/login', controller.login);
router.post('/login', controller.postLogin);    
module.exports = router;