import { combineReducers } from 'redux';
import session from './sessionReducer';
import user from './userReducer';
import dashboard from './student/dashboardCombinedReducer';
import instDashboard from './instructor/instDashboardCombinedReducers';
import submission from './student/submissions/submissionsReducer';
import assignment from './student/detail/assignmentDetailReducer';
import submissionDetails from './student/detail/submissionDetailReducer';

export default combineReducers({
  session,
  user, 
  dashboard,
  instDashboard,
  submission,
  assignment,
  submissionDetails
});
