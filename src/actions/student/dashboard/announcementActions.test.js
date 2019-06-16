import { getAnnouncements } from './announcementActions';

describe('student announcement actions', () => {
  it('creates an action to fetch announcements', () => {
    const action = getAnnouncements();

    expect(action).toEqual({
      type: 'GET_ANNOUNCEMENTS',
      pendingType: 'GET_ANNOUNCEMENTS_PENDING',
      fulfilledType: 'GET_ANNOUNCEMENTS_FULFILLED',
      rejectedType: 'GET_ANNOUNCEMENTS_REJECTED',
      payload: expect.any(Array)
      //payload will become a promise when we switch to real fetches
    });
  });
});
