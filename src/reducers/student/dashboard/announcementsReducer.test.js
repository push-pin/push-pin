import reducer from './announcementsReducer';

jest.mock('../../../services/student/dashboard/announcementServices.js', () => {
  return Promise.resolve([]);
});

jest.mock('../../../services/auth.js', () => ({
  handleAuth() {
    return Promise.resolve([{
      auth0Id: 'ig;hl;j',
      token: 'thisisatoken'
    }
    ]);
  }
}));

jest.mock('../../../actions/student/dashboard/announcementActions.js', () => {
  return Promise.resolve([]);
});

const initialState = {
  announcements: [],
  loading: false,
  error: {},
  unread: 0
};

describe('student announcements reducer', () => {
  it('handles the GET_ANNOUNCEMENTS action', () => {
    const newState = reducer(initialState, {
      type: 'GET_ANNOUNCEMENTS',
      payload: expect.any(Array)
    });

    expect(newState).toEqual({
      loading: false,
      announcements: expect.any(Array),
      error: {},
      unread: 0
    });
  });
  it('handles the get announcements error action', () => {
    const newState = reducer(initialState, {
      type: 'GET_ANNOUNCEMENTS_ERROR',
      payload: expect.any(Object)
    });
    expect(newState).toEqual({
      loading: false,
      announcements: [],
      error: expect.any(Object),
      unread: 0
    });
  });
});
