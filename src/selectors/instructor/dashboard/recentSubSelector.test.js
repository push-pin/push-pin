import { selectRecentSubs, selectRecentSubsError, selectRecentSubsLoading, selectRecentSubsUnread } from './recentSubsSelector';

const state = { instDashboard: {
  recentSubs: {
    recentSubs: [
      {
        itemTitle: 'Mob Build #4',
        date: 'Mon Jun 10 2019 00:00:00 GMT+0000',
        time: 'Mon Jun 10 2019 00:00:00 GMT+0000',
        user: {
          firstName: 'Megan',
          lastName: 'Marshall'
        },
        _id: 'kb;lnklnlk',
        read: false
      },
      {
        itemTitle: 'Mob Build #9',
        date: 'Mon Jun 10 2019 00:00:00 GMT+0000',
        time: 'Mon Jun 10 2019 00:04:00 GMT+0000',
        user: {
          firstName: 'Bob',
          lastName: 'Smith'
        },
        _id: 'kb;pykljb',
        read: false
      },
      {
        itemTitle: 'Comment',
        date: 'Mon Jun 10 2019 90:00:00 GMT+0000',
        time: 'Mon Jun 10 2019 00:00:18 GMT+0000',
        user: {
          firstName: 'Megan',
          lastName: 'Marshall'
        },
        _id: 'kjlghk',
        read: false
      }],
    loading: false,
    error: {},
    unread: 2
  } 
}
};

describe('instructor recent submissions selectors', () => {
  it('gets all instructor recent submissions', () => {
    expect(selectRecentSubs(state)).toEqual([
      {
        itemTitle: 'Mob Build #4',
        date: 'Mon Jun 10 2019 00:00:00 GMT+0000',
        time: 'Mon Jun 10 2019 00:00:00 GMT+0000',
        user: {
          firstName: 'Megan',
          lastName: 'Marshall'
        },
        _id: 'kb;lnklnlk',
        read: false
      },
      {
        itemTitle: 'Mob Build #9',
        date: 'Mon Jun 10 2019 00:00:00 GMT+0000',
        time: 'Mon Jun 10 2019 00:04:00 GMT+0000',
        user: {
          firstName: 'Bob',
          lastName: 'Smith'
        },
        _id: 'kb;pykljb',
        read: false
      },
      {
        itemTitle: 'Comment',
        date: 'Mon Jun 10 2019 90:00:00 GMT+0000',
        time: 'Mon Jun 10 2019 00:00:18 GMT+0000',
        user: {
          firstName: 'Megan',
          lastName: 'Marshall'
        },
        _id: 'kjlghk',
        read: false
      }]);
  });
  it('gets instructor recent submissions loading', ()=> {
    expect(selectRecentSubsLoading(state)).toEqual(false);
  });
  it('gets instructor recent subs error', () => {
    expect(selectRecentSubsError(state)).toEqual({});
  });
  it('gets instructor recent subs unread', () => {
    expect(selectRecentSubsUnread(state)).toEqual(2);
  });
});
