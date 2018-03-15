import { applyMiddleware, createStore, combineReducers } from 'redux';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import { intlReducer } from 'react-intl-redux';
import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';
import locales from './reducers/locales';

const reducer = combineReducers({
  auth,
  common,
  home,
  intl: intlReducer,
  locales
});

const initialState = {
  intl: {
    defaultLocale: 'sv',
    locale: 'sv'
  }
}
const middleware = applyMiddleware(promiseMiddleware, localStorageMiddleware);

const store = createStore(reducer, initialState, middleware);

export default store;
