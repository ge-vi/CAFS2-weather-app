const express = require('express');
const router = express.Router();

const meteoData = require('../../services/MeteoData');

router.get('/places/:name', async (request, response) => {

  const searchString = request.params.name;
  let placesFiltered = [];

  if (searchString && searchString.length >= 3) {
    meteoData.getPlaces()
      .then(places => {

          if (!places) {
            response.json([]);
            return;
          }
          placesFiltered = places.filter(place => place.name.toLowerCase().startsWith(searchString.toLowerCase()));
          response.json(placesFiltered.slice(0, 10));
        }
      )
      .catch(error => {
        if (error.response) {
          response.sendStatus(error.response.status);
        } else {
          console.log(error);
        }
      });
  }
});

module.exports = router;
