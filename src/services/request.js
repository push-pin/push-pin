import store from '../store';
import { getToken } from '../selectors/sessionSelectors';

const request = (path, method, body) => {
  // eslint-disable-next-line no-undef
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken(store.getState())}`
    },
    body: body ? JSON.stringify(body) : null
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw `unable to ${path}`;

      return json;
    });
};

export const post = (path, body) => request(path, 'POST', body);
export const get = path => request(path, 'GET');
export const put = (path, body) => request(path, 'PUT', body);
export const del = path => request(path, 'DELETE');
