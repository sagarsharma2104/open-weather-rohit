const openWeatherAPI = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "69f5b18b692cbec7ce081a1ab3d578f3";
const rpn = require('request-promise-native');

const OpenWeather = function (city, countryCode) {
    var options = {
        uri: openWeatherAPI,
        qs: {
            q: `${city}, ${countryCode}`,
            appid: API_KEY
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };


    return rpn(options)
        .then(function (response) {
            return response;
        })
        .catch(function (err) {
            //console.log('err : ', err);
            return err;
        });

}

module.exports = OpenWeather;