const request = require('superagent')

export function getForecast(){
    return request
        .get('http://localhost:3000/api/v1/weather')
        .then(res => res.body)
}