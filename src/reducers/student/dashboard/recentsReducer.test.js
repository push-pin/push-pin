import reducer from './recentsReducers';

jest.mock('../../../services/student/dashboard/recentItemServices.js');

jest.mock('../../../services/auth.js', () => ({
  handleAuth() {
    return Promise.resolve([{
      auth0Id: 'ig;hl;j',
      token: 'thisisatoken'
    }
    ]);
  }
}));

jest.mock('../../../actions/student/dashboard/recentsActions.js', () => {
  return Promise.resolve([]);
});

const initialState = {
  recents: [],
  loading: false,
  error: {},
  recent: 0
};

describe('recent items reducer', () => {
  it('handles the GET_RECENTS action', () => {
    const newState = reducer(initialState, {
      type: 'GET_RECENTS',
      payload: expect.any(Array)
    });

    expect(newState).toEqual({
      loading: false,
      recents: expect.any(Array),
      error: {},
      recent: 0
    });
  });
  it('handles the get recents error action', () => {
    const newState = reducer(initialState, {
      type: 'GET_RECENTS_ERROR',
      payload: expect.any(Object)
    });
    expect(newState).toEqual({
      loading: false,
      recents: [],
      error: expect.any(Object),
      recent: 0
    });
  });
});
