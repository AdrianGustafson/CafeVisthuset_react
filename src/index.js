import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import store from './store';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={App}>

      </Route>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();

//<IndexRoute component={Home} />
