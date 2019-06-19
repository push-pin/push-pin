export function fetchRecentSubs() {
  //this will return an array of recent submissions (both comments and assignment submissions) from students in an instructor's course(s). Timestamps will be used to pull a certain number of most recent subs (20?). graded assignments should not be displayed.

  const subArray = [
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
    },
    {
      itemTitle: 'Solo Promises',
      date: 'Mon Jun 10 2019 00:00:00 GMT+0000',
      time: 'Mon Jun 10 2019 00:12:00 GMT+0000',
      user: {
        firstName: 'Dave',
        lastName: 'Cornelius'
      },
      _id: 'fghj',
      read: false
    },
    {
      itemTitle: 'Comment',
      date: 'Mon Jun 10 2019 00:00:00 GMT+0000',
      time: 'Mon Jun 10 2019 00:00:10 GMT+0000',
      user: {
        firstName: 'Anna',
        lastName: 'Colin'
      },
      _id: 'yygk',
      read: false
    },
    {
      itemTitle: 'Comment',
      date: 'Mon Jun 10 2019 00:00:00 GMT+0000',
      time: 'Mon Jun 10 2019 80:00:00 GMT+0000',
      user: {
        firstName: 'Bonnie',
        lastName: 'Jared'
      },
      _id: 'hvgjbkn',
      read: false
    },
    {
      itemTitle: 'Mob Build #1',
      date: 'Mon Jun 10 2019 00:00:00 GMT+0000',
      time: 'Mon Jun 10 2019 08:00:00 GMT+0000',
      user: {
        firstName: 'Megan',
        lastName: 'Marshall'
      },
      _id: 'ghjk',
      read: false
    }
  ];

  return subArray;
}
