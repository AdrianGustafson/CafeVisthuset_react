import { applyMiddleware, createStore, combineReducers } from 'redux';
//import { promiseMiddleware, localStorageMiddleware } from './middleware';

import common from './reducers/common';

const reducer = combineReducers({
  common
});

const store = createStore(reducer);

export default store;
