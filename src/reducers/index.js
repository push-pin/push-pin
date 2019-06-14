import { combineReducers } from 'redux';
import session from './sessionReducer';
import user from './userReducer';

export default combineReducers({
  session,
  user
});
