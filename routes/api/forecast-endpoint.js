const express = require('express');
const router = express.Router();

const meteoData = require('../../services/MeteoData');

router.get('/places/:name', function(req, res) {

  const searchString = req.params.name;
  let placesFiltered = [];

  if (searchString && searchString.length >= 3) {
    meteoData.getPlaces()
      .then(places => {
        if (places) {
          placesFiltered = places.filter(place => place.name.toLowerCase().startsWith(searchString.toLowerCase()));
          res.json(placesFiltered.slice(0, 10));
        }
        res.json([]);
      })
      .catch(error => {
        if (error.response) {
          res.sendStatus(error.response.status);
        } else {
          console.log(error);
        }
      });
  }
});

module.exports = router;
