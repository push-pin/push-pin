import reducer from './submissionsReducer';

jest.mock('../../../services/student/detail/assignmentSubmissionServices.js');

jest.mock('../../../services/auth.js', () => ({
  handleAuth() {
    return Promise.resolve([{
      auth0Id: 'ig;hl;j',
      token: 'thisisatoken'
    }
    ]);
  }
}));

jest.mock('../../../actions/student/detail/assignment/reading/unsubmitted/readingSubmissionActions.js', () => {
  return Promise.resolve([]);
});

const initialState = {
  submission: '',
  loading: false,
  error: {}
};

describe('assignment submission reducer', () => {
  it('handles the CREATE_SUBMISSION action', () => {
    const newState = reducer(initialState, {
      type: 'CREATE_SUBMISSION',
      payload: 'hello'
    });

    expect(newState).toEqual({
      loading: false,
      submission: 'hello',
      error: {},
    });
  });
  it('handles the create submission error action', () => {
    const newState = reducer(initialState, {
      type: 'CREATE_SUBMISSION_ERROR',
      payload: expect.any(Object)
    });
    expect(newState).toEqual({
      loading: false,
      submission: '',
      error: expect.any(Object)
    });
  });
});
