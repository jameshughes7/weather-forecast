const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0eac6225d3f5590ea4772d6ff76a91f7/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si';

    request( { url, json: true}, (error, { body }) => {
        if (error) {
            callback(`Unable to connect to Forecast service`, undefined)
        } else if (body.error) {
            callback(`Unable to find location`, undefined)
        } else { 
            // callback(undefined, `${body.daily.data[0].summary} It is ${body.currently.temperature} out. There is a ${body.currently.precipProbability}% of rain.`);
            callback(undefined, `${body.daily.data[0].summary}. It is currently ${body.currently.temperature} degress out. The high today is ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow}. There is a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast;