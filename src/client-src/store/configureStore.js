import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import createSagaMiddleware from 'redux-saga'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  return createStore(reducer, initialState);
}
