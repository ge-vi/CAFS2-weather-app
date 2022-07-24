const express = require('express');
const { getPlaceForecast } = require('../services/MeteoApiService');
const router = express.Router();

const pageData = {};

router.get('/:city', function(req, res, next) {

  const city = req.params.city;

  getPlaceForecast(city).then(cityRes => {
    if (!cityRes.data) {
      res.send('no data');
    } else {
      pageData.title = `Orų prognozė, miestas: ${cityRes.data.place.name}`;
      pageData.forecast = cityRes.data;
    }
    res.render('cities', pageData);
  });
});

module.exports = router;
