import reducer from './weekReducer';

jest.mock('../../../services/student/dashboard/weekAtGlanceServices.js');

jest.mock('../../../services/auth.js', () => ({
  handleAuth() {
    return Promise.resolve([{
      auth0Id: 'ig;hl;j',
      token: 'thisisatoken'
    }
    ]);
  }
}));

jest.mock('../../../actions/student/dashboard/weekActions.js', () => {
  return Promise.resolve([]);
});

const initialState = {
  assignments: {
    weeksAsses: {},
    subs: []
  },
  loading: false,
  error: {}
};

describe('student week at a glance reducer', () => {
  it('handles the GET_WEEK_PENDING action', () => {
    expect(reducer(initialState, { type: 'GET_WEEK_PENDING' })).toEqual({
      loading: true,
      assignments: {
        subs: [],
        weeksAsses: {}
      },
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
      assignments: {
        subs: [],
        weeksAsses: {
        }
      },
      error: expect.any(Object)
    });
  });
});
