import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import ReactDOM from 'react-dom';
import { IndexRoute } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store';

import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

// Locales
import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';
import no from 'react-intl/locale-data/no';
import sv from 'react-intl/locale-data/sv';


//import localeData from './assets/locales/data.json';

addLocaleData([...de, ...en, ...no, ...sv]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
//const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

//split locales with a region code
//const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

//Try full locale, try locale without region code, fallback to sv.
//const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.sv;

//locale={language} messages={messages}
ReactDOM.render((
  <Provider  store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
