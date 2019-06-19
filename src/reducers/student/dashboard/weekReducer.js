import { GET_WEEK, GET_WEEK_PENDING, GET_WEEK_ERROR } from '../../../actions/student/dashboard/weekActions';

const initialState = {
  assignments: {},
  loading: false,
  error: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_WEEK:
      return { ...state, assignments: action.payload, loading: false };
    case GET_WEEK_PENDING:
      return { ...state, loading: true };
    case GET_WEEK_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

