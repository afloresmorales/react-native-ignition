import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import someReduxMiddleware from 'some-redux-middleware';
// import someOtherReduxMiddleware from 'some-other-redux-middleware';
import rootReducer from './reducers/root.reducer';
import sagas from '../sagas/sagas';

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

const sagaMiddleware = createSagaMiddleware();
const composedEnhancer = compose(
  /* applyMiddleware(someReduxMiddleware, someOtherReduxMiddleware),*/ applyMiddleware(
    sagaMiddleware,
  ),
  ...enhancerList,
);
const initStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagas.map((saga) => {
    sagaMiddleware.run(saga);
  });
  return store;
};

export {initStore};
