import { getInstWeek } from './instWeekActions';

jest.mock('../../../services/auth.js', () => ({
  handleAuth() {
    return Promise.resolve([{
      auth0Id: 'ig;hl;j',
      token: 'thisisatoken'
    }
    ]);
  }
}));

describe('instructor week at a glance actions', () => {
  it('creates an action to fetch week', () => {
    const action = getInstWeek();

    expect(action).toEqual({
      type: 'GET_INST_WEEK',
      pendingType: 'GET_INST_WEEK_PENDING',
      fulfilledType: 'GET_INST_WEEK_FULFILLED',
      rejectedType: 'GET_INST_WEEK_REJECTED',
      payload: expect.any(Object)
      //this is still in progress and test will need to be updated when we are fetching this information.
    });
  });
});
