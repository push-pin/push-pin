import { CREATE_SUBMISSION, CREATE_SUBMISSION_PENDING, CREATE_SUBMISSION_ERROR } from '../../../actions/student/detail/assignment/reading/unsubmitted/readingSubmissionActions';

const initialState = {
  submission: '',
  loading: false,
  error: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_SUBMISSION:
      return { ...state, submission: action.payload, loading: false };
    case CREATE_SUBMISSION_PENDING:
      return { ...state, loading: true };
    case CREATE_SUBMISSION_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
