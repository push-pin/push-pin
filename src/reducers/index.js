import { combineReducers } from 'redux';
import teacherReducer from './teacherReducer';
import session from './sessionReducer';

export default combineReducers({
  teacherReducer,
  session
});
