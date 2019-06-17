import { selectInstWeek, selectInstWeekError, selectInstWeekLoading } from './instWeekSelectors';

const state = { instDashboard: {
  instWeekAtGlance: {
    assignments: { 
      Mon: [
        {
          classDate: 'Mon Jun 10 2019 00:00:00 GMT+0000',
          dueDate: 'Fri Jun 14 2019 00:00:00 GMT+0000',
          type: 'reading',
          title: 'intro to react',
          totalStudents: 20,
          totalSubmissions: 15,
          totalGraded: 15,
          _id: 'fghjk'
        } 
      ]
    },
    loading: false,
    error: {}
  } 
}
};

describe('instructor week at glance selectors', () => {
  it('gets all instructor assignments', () => {
    expect(selectInstWeek(state)).toEqual({ 
      Mon: [
        {
          classDate: 'Mon Jun 10 2019 00:00:00 GMT+0000',
          dueDate: 'Fri Jun 14 2019 00:00:00 GMT+0000',
          type: 'reading',
          title: 'intro to react',
          totalStudents: 20,
          totalSubmissions: 15,
          totalGraded: 15,
          _id: 'fghjk'
        } 
      ]
    });
  });
  it('gets instructor week at glance loading', ()=> {
    expect(selectInstWeekLoading(state)).toEqual(false);
  });
  it('gets instructor annoucements error', () => {
    expect(selectInstWeekError(state)).toEqual({});
  });
});
