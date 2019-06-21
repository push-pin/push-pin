import reducer from './recentSubsReducer';

jest.mock('../../../services/instructor/dashboard/recentSubsService.js');

jest.mock('../../../services/auth.js', () => ({
  handleAuth() {
    return Promise.resolve([{
      auth0Id: 'ig;hl;j',
      token: 'thisisatoken'
    }
    ]);
  }
}));

jest.mock('../../../actions/instructor/dashboard/recentSubsActions.js');

const initialState = {
  recentSubs: [],
  loading: false,
  error: {},
  recent: 0
};

describe('instructor recent submissions reducer', () => {
  it('handles the GET_RECENT_SUBS_PENDING action', () => {
    expect(reducer(initialState, { type: 'GET_RECENT_SUBS_PENDING' })).toEqual({
      loading: true,
      recentSubs: [],
      error: {},
      recent: 0
    });
  });
  it('handles the GET_RECENT_SUBS action', () => {
    const newState = reducer(initialState, {
      type: 'GET_RECENT_SUBS',
      payload: expect.any(Array)
    });

    expect(newState).toEqual({
      loading: false,
      recentSubs: expect.any(Array),
      error: {},
      recent: 0
    });
  });
  it('handles the get recent subs error action', () => {
    const newState = reducer(initialState, {
      type: 'GET_RECENT_SUBS_ERROR',
      payload: expect.any(Object)
    });
    expect(newState).toEqual({
      loading: false,
      recentSubs: [],
      error: expect.any(Object),
      recent: 0
    });
  });
});
