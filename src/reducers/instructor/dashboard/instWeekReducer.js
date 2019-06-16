import { GET_INST_WEEK, GET_INST_WEEK_PENDING, GET_INST_WEEK_ERROR } from '../../../actions/instructor/dashboard/instWeekActions';

const initialState = {
  assignments: {},
  loading: false,
  error: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_INST_WEEK:
      return { ...state, assignments: action.payload, loading: false };
    case GET_INST_WEEK_PENDING:
      return { ...state, loading: true };
    case GET_INST_WEEK_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
