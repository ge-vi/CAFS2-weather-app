const axios = require('axios');

const METEO_PLACES_SERVICE_URL = 'https://api.meteo.lt/v1/places';

async function getAllPlaces() {

  const axiosResponse = await axios.get(METEO_PLACES_SERVICE_URL);

  const placesLt = axiosResponse.data.filter(place => {
    if (place.countryCode === 'LT') {
      return place;
    }
  });

  return placesLt;
}

async function getPlaceForecast(placeCode) {
  const axiosResponse = await axios.get(`${METEO_PLACES_SERVICE_URL}/${placeCode}/forecasts/long-term`);
  return axiosResponse;
}

module.exports = { getAllPlaces, getPlaceForecast };
