import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-intl-redux';
import { addLocaleData } from 'react-intl';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { store, history } from './store';

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
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' component={App} />
        </Switch>
      </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
