import { getRecents } from './recentsActions';

jest.mock('../../../services/auth.js', () => ({
  handleAuth() {
    return Promise.resolve([{
      auth0Id: 'ig;hl;j',
      token: 'thisisatoken'
    }
    ]);
  }
}));

jest.mock('../../../services/student/dashboard/recentItemServices.js', () => ({
  fetchRecents() {
    return Promise.resolve([]);
  }
}));

describe('student recents actions', () => {
  it('creates an action to fetch recents', () => {
    const action = getRecents();

    expect(action).toEqual({
      type: 'GET_RECENTS',
      pendingType: 'GET_RECENTS_PENDING',
      fulfilledType: 'GET_RECENTS_FULFILLED',
      rejectedType: 'GET_RECENTS_REJECTED',
      payload: expect.any(Promise)
    });
  });
});
