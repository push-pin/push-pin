import { createAction } from 'promise-middleware-redux';
import { fetchUser } from '../services/user/fetchUser';

export const [
  setUser,
  SET_USER,
  SET_USER_PENDING,
  SET_USER_ERROR
] = createAction('SET_USER', fetchUser);
