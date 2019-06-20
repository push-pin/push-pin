import { getAnnouncements } from './announcementActions';


jest.mock('../../../services/auth.js', () => ({
  handleAuth() {
    return Promise.resolve([{
      auth0Id: 'ig;hl;j',
      token: 'thisisatoken'
    }
    ]);
  }
}));
jest.mock('../../../services/student/dashboard/announcementServices.js', () => ({
  getAnnouncementsByCourse() {
    return Promise.resolve([]);
  }
}));

describe('student announcement actions', () => {
  it('creates an action to fetch announcements', () => {
    const action = getAnnouncements();

    expect(action).toEqual({
      type: 'GET_ANNOUNCEMENTS',
      pendingType: 'GET_ANNOUNCEMENTS_PENDING',
      fulfilledType: 'GET_ANNOUNCEMENTS_FULFILLED',
      rejectedType: 'GET_ANNOUNCEMENTS_REJECTED',
      payload: expect.any(Promise)
    });
  });
});
