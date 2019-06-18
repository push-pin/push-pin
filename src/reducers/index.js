import { combineReducers } from 'redux';
import session from './sessionReducer';
import user from './userReducer';
import dashboard from './student/dashboardCombinedReducer';
import instDashboard from './instructor/instDashboardCombinedReducers';
import submission from './student/submissions/submissionsReducer';

export default combineReducers({
  session,
  user, 
  dashboard,
  instDashboard,
  submission
});
