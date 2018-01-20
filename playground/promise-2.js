const request = require('request');


var geocodeAddress = (address)=>{
  return new Promise((resolve,reject)=>{
    request({
      url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
      json:true
    },(err,respone,body)=>{
      if (err) {
        reject('Unable to get adddress'+err);
      }
      else if (body.status === 'OK') {
        var location ={
          formatted_address:body.results[0].formatted_address,
          lat : body.results[0].geometry.location.lat,
          lng:body.results[0].geometry.location.lng
        };
        resolve(location);
      }
      else {
        reject('Unable to connect to server');
      }
    });
  });
};
geocodeAddress('19451').then((location)=>{
  console.log(JSON.stringify(location,undefined,2));
},(errorMessage)=>{
  console.log('Error : ', errorMessage);
});
