import { selectRecents, selectRecentsError, selectRecentsLoading } from './recentsSelectors';

const state = { dashboard: {
  recents: {
    recents: [
      {
        date: 'Thurs Jun 13 2019 00:00:00 GMT+0000',
        time: '00:00:00 GMT+0000',
        title: 'Mob Lab',
        submissionType: 'mob',
        eventType: 'comment',
        id: '12345',
        read: false
      }
    ],
    loading: false,
    error: {}
  } 
}
};

describe('recent assignments/comments selectors', () => {
  it('gets all recent items', () => {
    expect(selectRecents(state)).toEqual([
      {
        date: 'Thurs Jun 13 2019 00:00:00 GMT+0000',
        time: '00:00:00 GMT+0000',
        title: 'Mob Lab',
        submissionType: 'mob',
        eventType: 'comment',
        id: '12345',
        read: false
      }
    ]);
  });
  it('gets recent items loading', ()=> {
    expect(selectRecentsLoading(state)).toEqual(false);
  });
  it('gets recent subs error', () => {
    expect(selectRecentsError(state)).toEqual({});
  });
});
