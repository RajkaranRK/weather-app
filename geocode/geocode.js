const request = require('request');

//function to take the input as assdress
module.exports.getLocation= function(encodedAddress,callback) {
  request({
    url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true
  },(err,response,body)=>{
    if (err) {
      //unable to conect to server
      callback('Unable to find the address',null);
    }
    else if (body.status === 'OK') {
      var locationObject = {
        address:body.results[0].formatted_address,
        lat : body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng
      };
      callback(null,locationObject);
    }
    else {
      callback('No such kind of address is exists',null);
    }
  });
}
