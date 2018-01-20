const request = require('request');

module.exports.getWeatherInformation = function (lat,lng,callback){
  request({
    url : `https://api.darksky.net/forecast/a00eac9961143fb050602973154d5963/${lat},${lng}`,
    json:true
  },(err,response,body)=>{
    if (err) {
      callback('Unable to connect to server',undefined);
    }
    else if (response.statusCode === 200) {
      callback(undefined,body);
    }
    else {
      callback('Unable to fetch the weather info.....',undefined);
    }
  });
}
