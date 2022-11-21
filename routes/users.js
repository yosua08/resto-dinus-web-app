var express = require('express');
var router = express.Router();

var database = require('../database')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const sql = 'select * from menu'
  database.query(sql, (err, result) => {
    res.send(result);
  })
});

module.exports = router;
