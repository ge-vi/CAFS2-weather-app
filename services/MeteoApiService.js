const axios = require('axios');

const METEO_PLACES_SERVICE_URL = 'https://api.meteo.lt/v1/places';

function getAllPlaces() {
  return axios
    .get(METEO_PLACES_SERVICE_URL)
    .then(places => {
      return places.data.filter(place => {
        if (place.countryCode === 'LT') {
          return place;
        }
      });
    })
    .catch(err => {
      // todo handle error
      console.error(err);
    });
}

function isPlaceExists(placeCode) {
  return axios
    .get(METEO_PLACES_SERVICE_URL)
    .then(places => {
      return places.data.some(place => {
        return place.code === placeCode;
      });
    })
    .catch(err => {
      // todo handle error
      console.error(err);
    });
}

async function getPlaceForecast(placeCode) {
  try {
    return await axios.get(`${METEO_PLACES_SERVICE_URL}/${placeCode}/forecasts/long-term`);
  } catch (err) {
    return '';
  }
}

module.exports = { getAllPlaces, isPlaceExists, getPlaceForecast };
