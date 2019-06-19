import reducer from './recentSubsReducer';

jest.mock('../../../services/instructor/dashboard/recentSubsService.js');

const initialState = {
  recentSubs: [],
  loading: false,
  error: {},
  unread: 0
};

describe('instructor recent submissions reducer', () => {
  it('handles the GET_RECENT_SUBS_PENDING action', () => {
    expect(reducer(initialState, { type: 'GET_RECENT_SUBS_PENDING' })).toEqual({
      loading: true,
      recentSubs: [],
      error: {},
      unread: 0
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
      unread: 0
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
      unread: 0
    });
  });
});
