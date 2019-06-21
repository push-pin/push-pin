import { GET_RECENTS, GET_RECENTS_PENDING, GET_RECENTS_ERROR } from '../../../actions/student/dashboard/recentsActions';

const initialState = {
  recents: [],
  loading: false,
  error: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_RECENTS:
      return { ...state, recents: action.payload, loading: false };
    case GET_RECENTS_PENDING:
      return { ...state, loading: true };
    case GET_RECENTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default: 
      return state;
  }
}
