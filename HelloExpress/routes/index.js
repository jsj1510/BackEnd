var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// depth 경로 설정
// router.get('/', function(req, res, next) {
//   res.render('product/edit', {
//     title: "Express"
//   });
// });

module.exports = router;
