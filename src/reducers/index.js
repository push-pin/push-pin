import { combineReducers } from 'redux';
import session from './sessionReducer';
import user from './userReducer';
import dashboard from './student/dashboardCombinedReducer';

export default combineReducers({
  session,
  user, 
  dashboard
});
