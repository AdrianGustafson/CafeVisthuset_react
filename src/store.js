import { createStore, applyMiddleware } from 'redux';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers';

export const history = createHistory();

const myRouterMiddleware = routerMiddleware(history);
const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger())
  }
};

export const store = createStore(
  reducers, composeWithDevTools(getMiddleware()));
