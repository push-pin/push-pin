import { SET_USER } from '../actions/userActions';

const initialState = {
  userType: '',
  id: '',
  username: '',
  image: ''
};

export default function reducer(state = initialState, action) {
  console.log(action, 'action!');
  switch(action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
}
