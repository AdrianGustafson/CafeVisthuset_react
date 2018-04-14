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
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
}

const Auth = {
  current: () =>
    requests.get('/user'),
  login: (email, password) =>
    requests.post('/users/login', {'user': { email, password }}),
  register: (email, password) =>
    requests.post('/users/guest', {'user': { email, password }})
}

const Booking = {
  bike: booking =>
    requests.post('/cafe-visthuset/bookings/bike', {"booking": { booking }}),
}

const Email = {
  contact: (name, email, message) =>
    requests.post('/contact', {"email": {name, email, message }}),
}
export default {
  Auth,
  Booking,
  Email,
  setToken: _token => { token = _token; }
};
