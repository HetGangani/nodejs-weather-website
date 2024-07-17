const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=f4ae347da4e747f087c85733240907&q=' + latitude + ',' + longitude + '&aqi=no'

    request( {url: url, json: true}, (error,response) => {
        if (error) {
            callback('Unable to connect to weather services',undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search',undefined)
        } else {
            callback(undefined, response.body.current.condition.text + '. It is currently ' + response.body.current.temp_c + ' degrees out. It feels like ' + response.body.current.feelslike_c + '. Today humidity is ' + response.body.current.humidity + '%')
        }
    })
}

module.exports = forecast