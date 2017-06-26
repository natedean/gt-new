import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import theoryReducer from './reducers/theory'; // testing, this should be async...
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancers = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(logger, thunk)) : applyMiddleware(thunk);

const store = createStore(createRootReducer(), enhancers);
store.asyncReducers = {};

export default store;

// ----- start async reducer helpers ------ //
export function createRootReducer(asyncReducers) {
  return combineReducers({
    root: rootReducer,
    theory: theoryReducer,
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
