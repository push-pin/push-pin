import reducer from './instAnnouncementsReducer';

jest.mock('../../../services/instructor/dashboard/instAnnouncementService.js');

const initialState = {
  announcements: [],
  loading: false,
  error: {},
  unread: 0
};

describe('instructor announcements reducer', () => {
  it('handles the GET_INST_ANNOUNCEMENTS_PENDING action', () => {
    expect(reducer(initialState, { type: 'GET_INST_ANNOUNCEMENTS_PENDING' })).toEqual({
      loading: true,
      announcements: [],
      error: {},
      unread: 0
    });
  });
  it('handles the GET_INST_ANNOUNCEMENTS action', () => {
    const newState = reducer(initialState, {
      type: 'GET_INST_ANNOUNCEMENTS',
      payload: expect.any(Array)
    });

    expect(newState).toEqual({
      loading: false,
      announcements: expect.any(Array),
      error: {},
      unread: 0
    });
  });
  it('handles the get inst announcements error action', () => {
    const newState = reducer(initialState, {
      type: 'GET_INST_ANNOUNCEMENTS_ERROR',
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
