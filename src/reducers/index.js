import { combineReducers } from 'redux';
import session from './sessionReducer';
import user from './userReducer';
// import dashboard from './student/dashboardCombinedReducer';
import weekAtGlance from './student/dashboard/weekReducer';

export default combineReducers({
  session,
  user, 
  weekAtGlance
});
