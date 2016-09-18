import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers';
import createSagaMiddleware from 'redux-saga'

const createStoreWithMiddleware = applyMiddleware();

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();
  return {
    ...createStore(reducer, initialState, applyMiddleware(/* other middleware, */sagaMiddleware, logger)),
    runSaga: sagaMiddleware.run
  };
}
