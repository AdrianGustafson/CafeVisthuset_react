import { applyMiddleware, createStore, combineReducers } from 'redux';
//import { promiseMiddleware, localStorageMiddleware } from './middleware';

import common from './reducers/common';
import home from './reducers/home';

const reducer = combineReducers({
  common,
  home
});

const store = createStore(reducer);

export default store;
