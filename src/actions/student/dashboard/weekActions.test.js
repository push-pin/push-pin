import { getWeekAtGlance } from './weekActions';

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
