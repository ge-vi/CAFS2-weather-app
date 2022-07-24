const meteoApiService = require('./MeteoApiService');
const cache = require('memory-cache');

async function getPlaces() {
  if (cache.get('places')) {
    console.log('passing places from local cache.');
    return new Promise((resolve, reject) => {
      resolve(cache.get('places'));
    });
  } else {
    await meteoApiService.getAllPlaces()
      .then(places => {
        // todo change time to 15 min = 1000 * 60 * 15
        cache.put('places', places, 1000 * 60 * 1);
        console.log('requesting places from remote service.');
        return places;
      });
  }
}

module.exports = { getPlaces };
