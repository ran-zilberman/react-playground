require('es6-promise').polyfill();
require('isomorphic-fetch');

class FetchService {
  fetch(...args) {
    fetch.apply(null, args);
  }
}


export default new FetchService();