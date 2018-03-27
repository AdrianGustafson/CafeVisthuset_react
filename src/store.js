import { createStore, applyMiddleware, combineReducers } from 'redux';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import reducers from './reducers';

const history = createBrowserHistory();
const middleware = applyMiddleware(routerMiddleware(history), promiseMiddleware, localStorageMiddleware);

const store = createStore(reducers, middleware);
export default store;
