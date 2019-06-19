import { FETCH_ASSIGNMENT_DETAIL, FETCH_ASSIGNMENT_DETAIL_PENDING, FETCH_ASSIGNMENT_DETAIL_ERROR } from '../../../actions/student/detail/assignment/assignmentDetailActions';

const initialState = {
  assignment: {},
  loading: false,
  error: 0
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_ASSIGNMENT_DETAIL:
      return { ...state, assignment: action.payload, loading: false };
    case FETCH_ASSIGNMENT_DETAIL_PENDING:
      return { ...state, loading: true };
    case FETCH_ASSIGNMENT_DETAIL_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}


