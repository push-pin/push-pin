export function getInstWeek() {
  const today = new Date();
  const diff = today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1);
  const monday =  new Date(today.setDate(diff));
  //date.toString() gives you Mon June 10 2019 ...

  //fetch using monday date
  //map the returned array of assingments into an object of arrays based on day
  return {
    Mon: [
      {
        classDate: 'Mon Jun 10 2019 00:00:00 GMT+0000',
        dueDate: 'Fri Jun 14 2019 00:00:00 GMT+0000',
        type: 'reading',
        title: 'intro to react',
        totalStudents: 20,
        totalGraded: 15
      },
      {
        classDate: 'Mon Jun 10 2019 00:00:00 GMT+0000',
        dueDate: 'Thurs Jun 13 2019 00:00:00 GMT+0000',
        type: 'reading',
        title: 'intro to react',
        totalStudents: 20,
        totalGraded: 0
      }
    ],
    Tues: [
      {
        classDate: 'Tues Jun 11 2019 00:00:00 GMT+0000',
        dueDate: 'Fri Jun 14 2019 00:00:00 GMT+0000',
        type: 'reading',
        title: 'intro to react',
        totalStudents: 20,
        totalGraded: 10
      },
      {
        classDate: 'Tues Jun 11 2019 00:00:00 GMT+0000',
        dueDate: 'Thurs Jun 13 2019 00:00:00 GMT+0000',
        type: 'reading',
        title: 'intro to react',
        totalStudents: 20,
        totalGraded: 10
      }
    ],
    Wed: [
      {
        classDate: 'Wed Jun 12 2019 00:00:00 GMT+0000',
        dueDate: 'Fri Jun 14 2019 00:00:00 GMT+0000',
        type: 'reading',
        title: 'intro to react',
        totalStudents: 20,
        totalGraded: 10
      },
      {
        classDate: 'Wed Jun 12 2019 00:00:00 GMT+0000',
        dueDate: 'Thurs Jun 13 2019 00:00:00 GMT+0000',
        type: 'reading',
        title: 'intro to react',
        totalStudents: 20,
        totalGraded: 10
      }
    ],
    Thurs: [
      {
        classDate: 'Thurs Jun 13 2019 00:00:00 GMT+0000',
        dueDate: 'Fri Jun 14 2019 00:00:00 GMT+0000',
        type: 'reading',
        title: 'intro to react',
        totalStudents: 20,
        totalGraded: 10
      },
      {
        classDate: 'Thurs Jun 13 2019 00:00:00 GMT+0000',
        dueDate: 'Sun Jun 16 2019 00:00:00 GMT+0000',
        type: 'reading',
        title: 'intro to react',
        totalStudents: 20,
        totalGraded: 13
      }
    ],
    Fri: [
      {
        classDate: 'Fri Jun 14 2019 00:00:00 GMT+0000',
        dueDate: 'Fri Jun 14 2019 00:00:00 GMT+0000',
        type: 'reading',
        title: 'intro to react',
        totalStudents: 20,
        totalGraded: 10
      }
    ],
  };
}
