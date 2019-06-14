import { combineReducers } from 'redux';
import weekAtGlance from './dashboard/weekReducer';
import announcements from './dashboard/announcementsReducer';

export default combineReducers({
  weekAtGlance,
  announcements
  
});
