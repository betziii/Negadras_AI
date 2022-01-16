var express = require('express');
var router = express.Router();
var apis = require('./api.js');

router.post('/groupRecs', apis.groupRecs);

module.exports = router;