const request = require('request')

const geocode = (address,callback) => {
    const url = 'https://api.geoapify.com/v1/geocode/search?text=' + encodeURIComponent(address) + '&format=json&apiKey=d548c5ed24604be6a9dd0d989631f783'

    request( { url: url, json: true}, (error,response) => {
        if (error) {
            callback('Unable to connect to location services',undefined)
        } else if (response.body.results.length === 0) {
            callback('Unable to find location. Try another search',undefined)
        } else {
            callback(undefined, {
                latitude: response.body.results[0].lat,
                longitude: response.body.results[0].lon,
                location: response.body.results[0].formatted
            })
        }
    })
}

module.exports = geocode