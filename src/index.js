import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-intl-redux';
import { addLocaleData } from 'react-intl';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store';

import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

// Locales
import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';
import no from 'react-intl/locale-data/no';
import sv from 'react-intl/locale-data/sv';

addLocaleData([...de, ...en, ...no, ...sv]);

ReactDOM.render((
  <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
