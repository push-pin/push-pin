import reducer from './announcementsReducer';

jest.mock('../../../services/student/dashboard/announcementServices.js');

const initialState = {
  announcements: [],
  loading: false,
  error: {},
  unread: 0
};

describe('student announcements reducer', () => {
  it('handles the GET_ANNOUNCEMENTS_PENDING action', () => {
    expect(reducer(initialState, { type: 'GET_ANNOUNCEMENTS_PENDING' })).toEqual({
      loading: true,
      announcements: [],
      error: {},
      unread: 0
    });
  });
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
