import { getInstWeek } from './instWeekActions';

describe('instructor week at a glance actions', () => {
  it('creates an action to fetch week', () => {
    const action = getInstWeek();

    expect(action).toEqual({
      type: 'GET_INST_WEEK',
      pendingType: 'GET_INST_WEEK_PENDING',
      fulfilledType: 'GET_INST_WEEK_FULFILLED',
      rejectedType: 'GET_INST_WEEK_REJECTED',
      payload: expect.any(Object)
      //payload will become a promise when we switch to real fetches
    });
  });
});
