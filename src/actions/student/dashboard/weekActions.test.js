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
//impolement this when we are up and running with service
// jest.mock('../../../services/student/dashboard/weekAtGlanceServices.js', () => ({
//   fetchWeek() {
//     return Promise.resolve([]);
//   }
// }));
describe('student week actions', () => {
  it('creates an action to fetch week at glance', () => {
    const action = getWeekAtGlance();

    expect(action).toEqual({
      type: 'GET_WEEK',
      pendingType: 'GET_WEEK_PENDING',
      fulfilledType: 'GET_WEEK_FULFILLED',
      rejectedType: 'GET_WEEK_REJECTED',
      payload: expect.any(Object)
      //payload will become a promise when we switch to real fetches
    });
  });
});
