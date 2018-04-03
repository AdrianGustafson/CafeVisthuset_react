// ========================================================
// Internationalization
// ========================================================

// Translated strings
import localeData from '../../public/static/locales/data.json'

const initialState = {
  intl: {
    defaultLocale: 'sv',
    locale: 'sv'
  }
}

export default (state = initialState, action) => {
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
