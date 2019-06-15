import { combineReducers } from 'redux';
import instWeekAtGlance from './dashboard/instWeekReducer';
// import announcements from './dashboard/announcementsReducer';
import recentSubs from './dashboard/recentSubsReducer';

export default combineReducers({
  instWeekAtGlance,
  // announcements,
  recentSubs
});
