const request = require('request');

const weatherUrl = 'https://api.darksky.net/forecast/0eac6225d3f5590ea4772d6ff76a91f7/37.8267,-122.4233?units=si';

// JSON.parse converts JSON string into JS object notation
// json: true automatically parses response into JS object notation
// json: false is the default and this does leaves response as JSON string
request({ url: weatherUrl, json: true }, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(response.body.currently);
    if (error) {
        console.log('Unable to connnect to weather service');
    } else if (response.body.error) {
        console.log(`Unable to find location`)
    } else {
        console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`);
    }
})


const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/London.json?limit=2&access_token=pk.eyJ1IjoiamFtZXNodWdoZXM3IiwiYSI6ImNqdWZvamU4ZzBkc2g0ZXBnaWtoMXg2cWwifQ.DgBZQLsu9dyb7iHMXMCHPQ";

request({ url: geoCodeUrl, json: true }, (error, response) => {
    if (error) {
        console.log(`Cannot connect to GeoCoding Service`);
    } else if (response.body.features.length === 0) {
        console.log(`Unable to find co-ordinates. Try another search`)
    } else {
        const latitude = response.body.features[0].center[0];
        const longitude = response.body.features[0].center[1];
        console.log(`Latitude is ${latitude} and Longitude is ${longitude}`);
    }
})