const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=2&access_token=pk.eyJ1IjoiamFtZXNodWdoZXM3IiwiYSI6ImNqdWZvamU4ZzBkc2g0ZXBnaWtoMXg2cWwifQ.DgBZQLsu9dyb7iHMXMCHPQ'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to Location Services', undefined)
        } else if (response.body.features.length === 0 ) {
            console.log(`Unable to find co-ordinates. Try another search.`)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;