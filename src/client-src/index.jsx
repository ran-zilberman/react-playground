import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore.js';
import App from './components/App.jsx';
import rootSaga from './sagas';

const store = configureStore();
store.runSaga(rootSaga);

render(<Provider store={store}>
          <App/>
      </Provider>, document.getElementById('app'));

