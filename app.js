const request = require('request');
const geocode = require('./utils/geocode');

const weatherUrl = 'https://api.darksky.net/forecast/0eac6225d3f5590ea4772d6ff76a91f7/37.8267,-122.4233?units=si';

// JSON.parse converts JSON string into JS object notation
// json: true automatically parses response into JS object notation
// json: false is the default and this does leaves response as JSON string
// request({ url: weatherUrl, json: true }, (error, response) => {
//     // const data = JSON.parse(response.body)
//     // console.log(response.body.currently);
//     if (error) {
//         console.log('Unable to connnect to weather service');
//     } else if (response.body.error) {
//         console.log(`Unable to find location`)
//     } else {
//         console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`);
//     }
// })

geocode('Austin Texas', (error, data) => {
    console.log('Error', error);
    console.log('Data', data)
})