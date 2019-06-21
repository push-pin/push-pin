import { SET_SESSION } from '../actions/sessionActions';

const initialState = {
  auth0Id: '',
  token: '',
};

export default function reducer(state = initialState, action) {
  console.log('session', action.payload);
  switch(action.type) {
    case SET_SESSION:
      return action.payload;
    default:
      return state;
  }
}
