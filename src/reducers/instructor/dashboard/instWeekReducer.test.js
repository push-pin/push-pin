import reducer from './instWeekReducer';

jest.mock('../../../services/instructor/dashboard/weekGlanceService.js');

const initialState = {
  assignments: {},
  loading: false,
  error: {}
};

describe('instructor week hi at a glance reducer', () => {
  it('handles the GET_INST_WEEK_PENDING action', () => {
    expect(reducer(initialState, { type: 'GET_INST_WEEK_PENDING' })).toEqual({
      loading: true,
      assignments: {},
      error: {}
    });
  });
  it('handles the GET_INST_WEEK action', () => {
    const newState = reducer(initialState, {
      type: 'GET_INST_WEEK',
      payload: expect.any(Object)
    });
    expect(newState).toEqual({
      assignments: expect.any(Object),
      error: {},
      loading: false
    });
  });
  it('handles the GET_INST_WEEK_ERROR action', () => {
    const newState = reducer(initialState, {
      type: 'GET_INST_WEEK_ERROR',
      payload: expect.any(Object)
    });
    expect(newState).toEqual({
      assignments: {},
      loading: false,
      error: expect.any(Object)
    });
  });
});
