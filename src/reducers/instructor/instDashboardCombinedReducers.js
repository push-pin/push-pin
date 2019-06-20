import { combineReducers } from 'redux';
import instWeekAtGlance from './dashboard/instWeekReducer';
import recentSubs from './dashboard/recentSubsReducer';

export default combineReducers({
  instWeekAtGlance,
  recentSubs
});
