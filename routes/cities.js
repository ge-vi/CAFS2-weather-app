const express = require('express');
const router = express.Router();
const { AxiosError } = require('axios');
const meteoApiService = require('../services/MeteoApiService');


router.get('/:city', (request, response) => {

  const pageData = {};
  const city = request.params.city;

  meteoApiService.getPlaceForecast(city)
    .then(cityRes => {
      pageData.title = `Orų prognozė, miestas: ${cityRes.data.place.name}`;
      pageData.forecast = cityRes.data;
      response.render('cities', pageData);
    })
    .catch(error => {
      if (error instanceof AxiosError) {
        response.sendStatus(error.response.status);
      } else {
        console.error(error);
        response.redirect('/');
      }
    });

});

module.exports = router;
