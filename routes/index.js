var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.get('/sum', function(req, res, next) {
  res.render('sum', { title: 'Express' });
});

router.post('/process', function(req, res, next) {
  var a = parseInt(req.body.number1);
  var b = parseInt(req.body.number2);
  var result = a + b;
  console.log("result = " + result);
  res.render('ans', {mya: a, myb: b, myresult: result});
});
module.exports = router;
