const request = require('request');

let args = process.argv;
args = args.slice(2);

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    let data = JSON.parse(body);
    if (!data[0]) {
      callback(null);
    }
    if (data[0]) {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };