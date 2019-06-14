export function fetchAnnouncements() {
  //aggregation that returns an array of announcement objects

  const example = [
    {
      date: 'Thurs Jun 13 2019 00:00:00 GMT+0000',
      header: 'New Class Location',
      previewText: 'We have moved',
      bodyText: 'our new location is at 666 daddy ave',
      read: false
    },
    {
      date: 'Wed Jun 12 2019 00:00:00 GMT+0000',
      header: 'Wifi Is Down',
      previewText: 'Will be fixed tomorrow',
      bodyText: 'Sean spilled beer in the router sorry yall',
      read: false
    },
    {
      date: 'Tues Jun 11 2019 00:00:00 GMT+0000',
      header: 'Student of the month',
      previewText: 'Its Anna Duh',
      bodyText: 'we are proud to announce that Anna is the best student to walk the halls of Alchemy code lab',
      read: false
    },
    {
      date: 'Mon Jun 10 2019 00:00:00 GMT+0000',
      header: 'New Instructor Hired',
      previewText: 'Please welcome Detective Pikachu',
      bodyText: 'D. Pikachu will be teaching Bootcamp Prep and Bootcamp I',
      read: false
    }
  ];


  return example; 
}
