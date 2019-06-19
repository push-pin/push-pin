import {
  FETCH_READING_RESPONSES,
  FETCH_READING_RESPONSES_PENDING,
  FETCH_READING_RESPONSES_ERROR
} from '../../../actions/student/detail/assignment/reading/readingResponsesActions';

const initialState = {
  readingResponses: [],
  loading: false,
  error: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_READING_RESPONSES:
      return { ...state, readingResponses: action.payload, loading: false };
    case FETCH_READING_RESPONSES_PENDING:
      return { ...state, loading: true };
    case FETCH_READING_RESPONSES_ERROR:
      return { ...state, loading: false, error: action.payload };
    default: 
      return state;
  }
}
