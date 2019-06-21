import store from '../../../store';
import { getToken } from '../../../selectors/sessionSelectors';

export const fetchRecents = (studentId) => {
  console.log('is this firing?');
  Promise.all([
    fetch(`${process.env.API_URL}/api/v1/comments/recent/${studentId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken(store.getState())}`
      },
    }),
    fetch(`${process.env.API_URL}/api/v1/grades/student/recent/${studentId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken(store.getState())}`
      },
    })
  ])
    .then(res => {
      console.log(res);
      [res.ok, res.json()];
    })
    .then(([ok, json]) => {
      if(!ok) throw 'unable to fetch';
      console.log('hello', json);
      return json;
    });
};

