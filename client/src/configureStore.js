import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancers = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk, logger)) : applyMiddleware(thunk);

const store = createStore(createRootReducer(), enhancers);
store.asyncReducers = {};

export default store;

// ----- start async reducer helpers ------ //
export function createRootReducer(asyncReducers) {
  return combineReducers({
    root: rootReducer,
    ...asyncReducers
  });
}

export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createRootReducer(store.asyncReducers));
}

export function removeAsyncReducer(store, name) {
  delete store.asyncReducers[name];
  store.replaceReducer(createRootReducer(store.asyncReducers));
}
// ----- end async reducer helpers ------ //
