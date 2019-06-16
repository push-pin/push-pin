import { getRecents } from './recentsActions';

describe('student recents actions', () => {
  it('creates an action to fetch recents', () => {
    const action = getRecents();

    expect(action).toEqual({
      type: 'GET_RECENTS',
      pendingType: 'GET_RECENTS_PENDING',
      fulfilledType: 'GET_RECENTS_FULFILLED',
      rejectedType: 'GET_RECENTS_REJECTED',
      payload: expect.any(Array)
      //payload will become a promise when we switch to real fetches
    });
  });
});
