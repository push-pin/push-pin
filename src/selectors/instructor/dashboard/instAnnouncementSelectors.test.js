import { selectInstAnnouncements, selectInstAnnouncementsLoading, selectInstAnnouncementsError, selectInstUnreadAnnouncements } from './instAnnouncementsSelectors';

const state = { instDashboard: {
  instAnnouncements: {
    announcements: [{
      date: 'Thurs Jun 13 2019 00:00:00 GMT+0000',
      header: 'New Class Location',
      previewText: 'We have moved',
      bodyText: 'our new location is at 666 daddy ave',
      read: false,
      _id: 'ouigh'
    }],
    loading: false,
    error: {},
    unread: 1
  } 
}
};

describe('instructor announcement selectors', () => {
  it('gets all instructor announcements', () => {
    expect(selectInstAnnouncements(state)).toEqual([{
      date: 'Thurs Jun 13 2019 00:00:00 GMT+0000',
      header: 'New Class Location',
      previewText: 'We have moved',
      bodyText: 'our new location is at 666 daddy ave',
      read: false,
      _id: 'ouigh'
    }]);
  });
  it('gets instructor announcements loading', ()=> {
    expect(selectInstAnnouncementsLoading(state)).toEqual(false);
  });
  it('gets instructor annoucements error', () => {
    expect(selectInstAnnouncementsError(state)).toEqual({});
  });
  it('gets instructor annoucements unread', () => {
    expect(selectInstUnreadAnnouncements(state)).toEqual(1);
  });
});
