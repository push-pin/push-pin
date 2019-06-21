import { selectAnnouncements, selectAnnouncementsError, selectAnnouncementsLoading, selectRecentAnnouncements } from './announcementSelectors';

const state = { dashboard: {
  announcements: {
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
    recent: 1
  } 
}
};

describe('student announcement selectors', () => {
  it('gets all announcements', () => {
    expect(selectAnnouncements(state)).toEqual([{
      date: 'Thurs Jun 13 2019 00:00:00 GMT+0000',
      header: 'New Class Location',
      previewText: 'We have moved',
      bodyText: 'our new location is at 666 daddy ave',
      read: false,
      _id: 'ouigh'
    }]);
  });
  it('gets announcements loading', ()=> {
    expect(selectAnnouncementsLoading(state)).toEqual(false);
  });
  it('gets annoucements error', () => {
    expect(selectAnnouncementsError(state)).toEqual({});
  });
  it('gets  annoucements recent', () => {
    expect(selectRecentAnnouncements(state)).toEqual(1);
  });
});
