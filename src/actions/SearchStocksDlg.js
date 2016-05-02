import request from 'request';
import cheerio from 'cheerio';

export const STOCK_SEARCH_IN_PROGRESS = 'STOCK_DATA_FETCHED';
export const STOCK_DATA_FETCHED = 'STOCK_DATA_FETCHED';

export function fetchStock(stockSymbol) {
  return (dispatch, getState) => {

    dispatch({
      type: STOCK_SEARCH_IN_PROGRESS
    });

    let options = {
      url: `http://localhost:1337/nasdaq.com/symbol/${stockSymbol}/historical` ,
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost'
      }
    };

    request.get(options, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        var $ = cheerio.load(body);
        console.log(body); // Show the HTML for the Modulus homepage.

        dispatch({
          type: STOCK_DATA_FETCHED
        });
      } else {
        console.log('error occured while trying to fetch data')
      }
    });
  };
}

const parseData = (nasdaqPageBody) => {

};

