import { GET_WEEK } from '../../../actions/student/dashboard/weekActions';

const initialState = {
  assignments: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_WEEK:
      return action.payload;
    default:
      return state;
  }
}


