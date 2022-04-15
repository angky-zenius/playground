const service = require('../service/user.service.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', service.findAll);

/* Add user */
router.post('/', service.create);

module.exports = router;

