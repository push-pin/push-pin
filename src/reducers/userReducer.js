import { SET_USER } from '../actions/userActions';

const initialState = {
  user: {},
  profile: {},
  currentCourses: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
}
