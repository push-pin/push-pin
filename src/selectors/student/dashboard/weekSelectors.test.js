import { selectWeek, selectWeekError, selectWeekLoading } from './weekSelectors';

const state = { dashboard: {
  weekAtGlance: {
    assignments: { 
      Mon: [
        {
          classDate: 'Mon Jun 10 2019 00:00:00 GMT+0000',
          dueDate: 'Fri Jun 14 2019 00:00:00 GMT+0000',
          type: 'reading',
          title: 'intro to react'
        },
        {
          classDate: 'Mon Jun 10 2019 00:00:00 GMT+0000',
          dueDate: 'Thurs Jun 13 2019 00:00:00 GMT+0000',
          type: 'reading',
          title: 'intro to react'
        }
      ]
    },
    loading: false,
    error: {}
  } 
}
};

describe('student week at glance selectors', () => {
  it('gets all assignments', () => {
    expect(selectWeek(state)).toEqual({ 
      Mon: [
        {
          classDate: 'Mon Jun 10 2019 00:00:00 GMT+0000',
          dueDate: 'Fri Jun 14 2019 00:00:00 GMT+0000',
          type: 'reading',
          title: 'intro to react'
        },
        {
          classDate: 'Mon Jun 10 2019 00:00:00 GMT+0000',
          dueDate: 'Thurs Jun 13 2019 00:00:00 GMT+0000',
          type: 'reading',
          title: 'intro to react'
        }
      ]
    });
  });
  it('gets  week at glance loading', ()=> {
    expect(selectWeekLoading(state)).toEqual(false);
  });
  it('gets annoucements error', () => {
    expect(selectWeekError(state)).toEqual({});
  });
});

