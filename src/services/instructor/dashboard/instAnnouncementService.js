export function fetchInstAnnouncements() {
  //aggregation that returns an array of announcement objects based on course(s) instructor has

  const example = [
    {
      date: 'Thurs Jun 13 2019 00:00:00 GMT+0000',
      header: 'New Class Location',
      previewText: 'We have moved',
      bodyText: 'our new location is at 666 daddy ave',
      read: false,
      _id: 'ouigh'
    },
    {
      date: 'Wed Jun 12 2019 00:00:00 GMT+0000',
      header: 'Wifi Is Down',
      previewText: 'Will be fixed tomorrow',
      bodyText: 'Sean spilled beer in the router sorry yall',
      read: false,
      _id: 'goihuoj'
    },
    {
      date: 'Tues Jun 11 2019 00:00:00 GMT+0000',
      header: 'Student of the month',
      previewText: 'Its Anna Duh',
      bodyText: 'we are proud to announce that Anna is the best student to walk the halls of Alchemy code lab',
      read: false,
      _id: 'fogihu'
    },
    {
      date: 'Mon Jun 10 2019 00:00:00 GMT+0000',
      header: 'New Instructor Hired',
      previewText: 'Please welcome Detective Pikachu',
      bodyText: 'D. Pikachu will be teaching Bootcamp Prep and Bootcamp I',
      read: false,
      _id: 'g8ihuoj'
    }
  ];


  return example; 
}
