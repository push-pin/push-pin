import { createAction } from 'promise-middleware-redux';
import { fetchUser } from '../services/user/fetchUser';

export const [
  setUser,
  SET_USER,
  SET_USER_PENDING
] = createAction('SET_USER', fetchUser);
