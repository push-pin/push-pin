import { combineReducers } from 'redux';
import instWeekAtGlance from './dashboard/instWeekReducer';
import instAnnouncements from './dashboard/instAnnouncementsReducer';
import recentSubs from './dashboard/recentSubsReducer';

export default combineReducers({
  instWeekAtGlance,
  instAnnouncements,
  recentSubs
});
