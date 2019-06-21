import { getRecentSubs } from './recentSubsActions';

jest.mock('../../../services/auth.js', () => ({
  handleAuth() {
    return Promise.resolve([{
      auth0Id: 'ig;hl;j',
      token: 'thisisatoken'
    }
    ]);
  }
}));
jest.mock('../../../services/instructor/dashboard/recentSubsService.js', () => ({
  fetchRecentSubs() {
    return Promise.resolve([]);
  }
}));

describe('instructor recent submissions actions', () => {
  it('creates an action to fetch recent submissions', () => {
    const action = getRecentSubs();

    expect(action).toEqual({
      type: 'GET_RECENT_SUBS',
      pendingType: 'GET_RECENT_SUBS_PENDING',
      fulfilledType: 'GET_RECENT_SUBS_FULFILLED',
      rejectedType: 'GET_RECENT_SUBS_REJECTED',
      payload: expect.any(Promise)
    });
  });
});
