'use strict';

let express = require("express");
let path = require('path');
let yahooFinance = require('yahoo-finance');

const configureViewsEngine = () => {
  app.set('views', path.join(__dirname, '..', 'views'));
  app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());
};

const app = express();

app.get('/',  (req, res) => {
  res.render('index');
  res.status(200);
});

app.get('/getStockHistoricalData', (req, res) => {
  console.log('Server API: getStockHistoricalData');
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Credentials", true);

  yahooFinance.historical({
    symbol: 'WIX',
    from: '2015-01-01',
    to: '2015-12-31'
    // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
  }, (err, quotes) => {
    if (err) {
      throw new Error('Failed to fetch data from provider: ' + err);
    }
    res.json(quotes);
  });
});

configureViewsEngine();
app.use(express.static('dist'));

var server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});