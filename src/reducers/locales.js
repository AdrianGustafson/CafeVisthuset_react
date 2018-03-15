// ========================================================
// Internationalization
// ========================================================

// Translated strings
import localeData from '../../public/locales/data.json'

export default (state = {}, action) => {
  switch (action.type) {
    case 'APP_LOAD':
      return {
        ...state,
        ...localeData,
      };
    case 'CHANGE_LOCALE':
      return {
        ...state,
        ...action.payload,
      };
  }
  return state;
};
