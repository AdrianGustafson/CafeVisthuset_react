import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { intlReducer } from 'react-intl-redux';

import auth from './auth';
import booking from './booking';
import common from './common';
import home from './home';
import locales from './locales';

export default combineReducers({
  auth,
  booking,
  common,
  home,
  intl: intlReducer,
  locales,
  routing: routerReducer
});
