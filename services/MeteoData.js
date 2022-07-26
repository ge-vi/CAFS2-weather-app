const meteoApiService = require('./MeteoApiService');
const cache = require('memory-cache');

module.exports.getPlaces = async function() {
  if (cache.get('places')) {
    return cache.get('places');
  } else {
    const places = await meteoApiService.getAllPlaces();
    // time to keep cached data: 15 min
    cache.put('places', places, 1000 * 60 * 15);
    return places;
  }
}
