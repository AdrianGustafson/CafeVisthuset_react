'use strict';

import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://127.0.0.1:8000/api';

const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if(token) {
    req.set('authorization', `Token ${token}`);
  }
}

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  post: url =>
    superagent.post(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
}

const Auth = {
  current: () =>
    requests.get('/guest'),
  login: (email, password) =>
    request.post('/users/login', {'user': { email, password } })
}

export default {
  Auth,
  setToken: _token => { token = _token; }
};