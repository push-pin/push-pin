import { combineReducers } from 'redux';
import weekAtGlance from './dashboard/weekReducer';
import announcements from './dashboard/announcementsReducer';
import recents from './dashboard/recentsReducers';

export default combineReducers({
  weekAtGlance,
  announcements,
  recents
});
