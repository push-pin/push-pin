import { GET_WEEK, GET_WEEK_PENDING, GET_WEEK_ERROR } from '../../../actions/student/dashboard/weekActions';

const initialState = {
  assignments: {
    weeksAsses: {},
    subs: []
  },
  loading: false,
  error: {}
};

export default function reducer(state = initialState, action) {
  console.log('weekreducer', action.payload);
  switch(action.type) {
    case GET_WEEK:
      return { ...state, assignments: { weeksAsses: action.payload.weeksAsses, subs: action.payload.subs }, loading: false };
    case GET_WEEK_PENDING:
      return { ...state, loading: true };
    case GET_WEEK_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
