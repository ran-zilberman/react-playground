'use strict';

let express = require("express");
//let cors = require('cors');
let yahooFinance = require('yahoo-finance');

const app = express();

app.get('/getStockHistoricalData', function (req, res) {
  console.log('Server API: getStockHistoricalData');
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Credentials", true);

  yahooFinance.historical({
    symbol: 'WIX',
    from: '2015-01-01',
    to: '2015-12-31'
    // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
  }, function (err, quotes) {
    if (err) {
      throw new Error('Failed to fetch data from provider: ' + err);
    }
    res.json(quotes);
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});