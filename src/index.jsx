import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore.js';
import SearchStocksDlgContainer from './containers/SearchStocksDlgContainer.jsx';


//class App extends Component {
//  render () {
//    return <button disabled>Search</button>;
//  }
//}

const App = () => (
  <SearchStocksDlgContainer/>
);

const store = configureStore();

render(<Provider store={store}>
          <App/>
      </Provider>, document.getElementById('app'));

