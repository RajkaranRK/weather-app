const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');


var argv = yargs
  .option({
    a:{
      alias:'address',
      demand:true,
      string:true,
      describe:'Address to fetch'
    }
  }).help().alias('help','h')
    .argv;

console.log(argv);
var encodedAddress = encodeURIComponent(argv.address);
console.log('Location : '+`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`);
geocode.getLocation(encodedAddress,(err,result)=>{
  if (err) {
    console.log(err);
  }
  else {
    console.log(JSON.stringify(result,undefined,2));
    weather.getWeatherInformation(result.lat,result.lng,(err,result)=>{
      if (err) {
        console.log(err);
      }
      else {
        parseResults(result);
      }
    });

  }
});

var parseResults = function(result){
  console.log('Current Details......');
  console.log('Summary : '+result.currently.summary);
  console.log('Humidity : '+result.currently.humidity);
}
