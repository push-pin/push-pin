import reducer from './weekReducer';

jest.mock('../../../services/student/dashboard/weekAtGlanceServices.js');

const initialState = {
  assignments: {},
  loading: false,
  error: {}
};

describe('student week at a glance reducer', () => {
  it('handles the GET_WEEK_PENDING action', () => {
    expect(reducer(initialState, { type: 'GET_WEEK_PENDING' })).toEqual({
      loading: true,
      assignments: {},
      error: {}
    });
  });
  it('handles the GET_WEEK action', () => {
    const newState = reducer(initialState, {
      type: 'GET_WEEK',
      payload: expect.any(Object) 
    });
    expect(newState).toEqual({
      loading: false,
      assignments: expect.any(Object),
      error: {}
    });
  });
  it('handles the GET_WEEK_ERROR action', () => {
    const newState = reducer(initialState, {
      type: 'GET_WEEK_ERROR',
      payload: expect.any(Object)
    });
    expect(newState).toEqual({
      loading: false,
      assignments: {},
      error: expect.any(Object)
    });
  });
});
