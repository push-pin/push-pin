import { getRecentSubs } from './recentSubsActions';

describe('instructor recent submissions actions', () => {
  it('creates an action to fetch recent submissions', () => {
    const action = getRecentSubs();

    expect(action).toEqual({
      type: 'GET_RECENT_SUBS',
      pendingType: 'GET_RECENT_SUBS_PENDING',
      fulfilledType: 'GET_RECENT_SUBS_FULFILLED',
      rejectedType: 'GET_RECENT_SUBS_REJECTED',
      payload: expect.any(Array)
      //payload will become a promise when we switch to real fetches
    });
  });
});
