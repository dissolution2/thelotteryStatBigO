var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test/my/long/v1/api', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
