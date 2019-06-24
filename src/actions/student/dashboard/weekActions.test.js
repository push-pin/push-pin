import { getWeekAtGlance } from './weekActions';

jest.mock('../../../services/auth.js', () => ({
  handleAuth() {
    return Promise.resolve([{
      auth0Id: 'ig;hl;j',
      token: 'thisisatoken'
    }
    ]);
  }
}));

jest.mock('../../../services/student/dashboard/weekAtGlanceServices.js', () => ({
  fetchWeekAtGlance() {
    return Promise.resolve([]);
  }
}));

describe('student week actions', () => {
  it('creates an action to fetch week at a glance', () => {

    expect(getWeekAtGlance()).toEqual({
      type: 'GET_WEEK',
      pendingType: 'GET_WEEK_PENDING',
      fulfilledType: 'GET_WEEK_FULFILLED',
      rejectedType: 'GET_WEEK_REJECTED',
      payload: expect.any(Promise)
    });
  });
});
