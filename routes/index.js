const express = require('express');
const router = express.Router();


const pageData = {
  lang: 'lt',
  title: 'Orų prognozė Jūsų miestui'
};

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', pageData);
});

module.exports = router;
