require('es6-promise').polyfill();
require('isomorphic-fetch');

class FetchService {
  fetch(...args) {
    fetch.apply(null, args);
  }
}
 //3

export default new FetchService();