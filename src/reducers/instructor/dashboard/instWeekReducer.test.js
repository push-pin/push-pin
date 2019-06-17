import reducer from './instWeekReducer';

jest.mock('../../../services/instructor/dashboard/weekGlanceService.js');

const initialState = {
  assignments: {},
  loading: false,
  error: {}
};

describe('instructor week at a glance reducer', () => {
  it('handles the GET_INST_WEEK_PENDING action', () => {
    expect(reducer(initialState, { type: 'GET_INST_WEEK_PENDING' })).toEqual({
      loading: true,
      assignments: {},
      error: {}
    });
  });
});
