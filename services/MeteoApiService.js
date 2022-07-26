const axios = require('axios').default;
// axios.<method> will now provide autocomplete and parameter typings

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
  // noinspection UnnecessaryLocalVariableJS
  const axiosResponse = await axios.get(`${METEO_PLACES_SERVICE_URL}/${placeCode}/forecasts/long-term`);
  return axiosResponse;
}

module.exports = { getAllPlaces, getPlaceForecast };
