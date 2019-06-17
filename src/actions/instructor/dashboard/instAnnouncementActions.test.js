import { getInstAnnouncements } from './instAnnouncementActions';

describe('instructor announcement actions', () => {
  it('creates an action to fetch announcements', () => {
    const action = getInstAnnouncements();

    expect(action).toEqual({
      type: 'GET_INST_ANNOUNCEMENTS',
      pendingType: 'GET_INST_ANNOUNCEMENTS_PENDING',
      fulfilledType: 'GET_INST_ANNOUNCEMENTS_FULFILLED',
      rejectedType: 'GET_INST_ANNOUNCEMENTS_REJECTED',
      payload: expect.any(Array)
      //payload will become a promise when we switch to real fetches
    });
  });
});
