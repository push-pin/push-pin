import { GET_ASSES_BY_COURSE, GET_ASSES_BY_COURSE_PENDING, GET_ASSES_BY_COURSE_ERROR } from '../../../src/actions/assignment/assActions';

const initialState = {
  asses: [],
  subs:[],
  loading: false
};

export default function reducer(state = initialState, action) {
  console.log(action);
  switch(action.type) {
    case GET_ASSES_BY_COURSE:
      return { ...state, asses: action.payload, loading: false };
    case GET_ASSES_BY_COURSE_PENDING:
      return { ...state, loading: true };
    case GET_ASSES_BY_COURSE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
