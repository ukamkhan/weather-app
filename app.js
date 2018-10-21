const request = require('request');

request({
  url: 'http://www.mapquestapi.com/geocoding/v1/address?key=QgTSCf2d4EimqqdxKTQirvADok00Srt8&location=1301%20lombard%20street%20philadelphia',
  json: true
}, (error, response, body) => {
  console.log(body.results[0].locations[0]);
});
