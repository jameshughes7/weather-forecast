const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0eac6225d3f5590ea4772d6ff76a91f7/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si';

    request( {url: url, json: true}, (error, response) => {
        if (error) {
            callback(`Unable to connect to Forecast service`, undefined)
        } else if (response.body.error) {
            callback(`Unable to find location`, undefined)
        } else { 
            callback(undefined, {
                summary: response.body.daily.data[0].summary,
                temperature: response.body.currently.temperature,
                rain_percentage: response.body.currently.precipProbability
            })
        }
    })
}

module.exports = forecast;