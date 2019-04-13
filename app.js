const request = require('request');

const url = 'https://api.darksky.net/forecast/0eac6225d3f5590ea4772d6ff76a91f7/37.8267,-122.4233';

// JSON.parse converts JSON string into JS object notation
// json: true automatically parses response into JS object notation
// json: false is the default and this does leaves response as JSON string
request({ url: url, json: true }, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(response.body.currently);
    console.log(
        `It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability} chance of rain.`
        );
})