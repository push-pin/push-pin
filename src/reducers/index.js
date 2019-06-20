import { combineReducers } from 'redux';
import session from './sessionReducer';
import user from './userReducer';
import dashboard from './student/dashboardCombinedReducer';
import instDashboard from './instructor/instDashboardCombinedReducers';
import submission from './student/submissions/submissionsReducer';
import assignment from './student/detail/assignmentDetailReducer';
import submissionList from './student/detail/submissionDetailReducer';
import createAssignment from './instructor/createAssignmentReducer';

export default combineReducers({
  session,
  user, 
  dashboard,
  instDashboard,
  submission,
  assignment,
  submissionList,
  createAssignment
});
