import reducer from './recentsReducers';

jest.mock('../../../services/student/dashboard/recentItemServices.js');

const initialState = {
  recents: [],
  loading: false,
  error: {},
  unread: 0
};

describe('recent items reducer', () => {
  it('handles the GET_RECENTS_PENDING action', () => {
    expect(reducer(initialState, { type: 'GET_RECENTS_PENDING' })).toEqual({
      loading: true,
      recents: [],
      error: {},
      unread: 0
    });
  });
  it('handles the GET_RECENTS action', () => {
    const newState = reducer(initialState, {
      type: 'GET_RECENTS',
      payload: expect.any(Array)
    });

    expect(newState).toEqual({
      loading: false,
      recents: expect.any(Array),
      error: {},
      unread: 0
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
      unread: 0
    });
  });
});
