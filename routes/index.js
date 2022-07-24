const express = require('express');
const router = express.Router();
const meteoService = require('../services/MeteoApiService');
const meteoData = require('../services/MeteoData');
const app = require('../app');
const axios = require('axios');


const pageData = {
  lang: 'lt',
  title: 'Orų prognozė Jūsų miestui'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  const placeVilnius = meteoService.isPlaceExists('vilnius');
  placeVilnius.then(zzz => console.log(zzz));

  res.render('index', pageData);
});

module.exports = router;
