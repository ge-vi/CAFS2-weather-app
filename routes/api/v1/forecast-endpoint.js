const express = require('express');
const router = express.Router();

const meteoData = require('../../../services/MeteoData');

router.get('/places/find/:name', function(req, res, next) {

  const searchString = req.params.name;
  let placesFiltered = [];

  meteoData.getPlaces()
    .then(places => {
      if (places) {
        placesFiltered = places.filter(place => place.name.toLowerCase().startsWith(searchString.toLowerCase()));
      }
      res.json(placesFiltered.slice(0, 5));
    })
    .catch(err => console.error(err));
});

module.exports = router;
