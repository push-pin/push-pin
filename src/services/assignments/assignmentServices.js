// import { get } from '../../request';



// returning dumby data that is expected from back end 
export const fetchAssesByCourse = () => {
// export const getAssesByCourse = (courseId, studentId) => {
  // return get(`/api/v1/assignment/course/${courseId}/student/${studentId}`);
  const response = {
    course: {
      _id: '5d07e2d971a8382af43cd954',
      active: true,
      name: 'JavaScript Lead Software Test Engineer',
      term: 'Spring 2103',
      startDate: 'Mond Jun 03 2019 00:00:00 GMT+0000',
      endDate: 'Frie Jun 28 2019 00:00:00 GMT+0000',
      courseType: 'BootCamp2'
    },
    asses: [
      {
        _id: '5d07e2db71a8382af43cd975',
        active: true,
        courseId: '5d07e2d971a8382af43cd954',
        type: 'solo',
        title: 'noza',
        instructions: 'Sabzisini uzojivab mulijo opo ofu kimfewnu giberve fez nas izjowga hobum goolji.',
        dateAvailable: 'Thurs Jun 06 2019 00:00:00 GMT+0000',
        dateDue: 'Thurs Jun 06 2019 00:00:00 GMT+0000',
        dateClosed: 'Thurs Jun 06 2019 00:00:00 GMT+0000',
        classDate: 'Thurs Jun 06 2019 00:00:00 GMT+0000'
      },
      {
        _id: '5d07e2db71a8382af43cd97c',
        active: true,
        courseId: '5d07e2d971a8382af43cd954',
        type: 'solo',
        title: 'noza',
        instructions: 'Sabzisini uzojivab mulijo opo ofu kimfewnu giberve fez nas izjowga hobum goolji.',
        dateAvailable: 'Thurs Jun 13 2019 00:00:00 GMT+0000',
        dateDue: 'Thurs Jun 13 2019 00:00:00 GMT+0000',
        dateClosed: 'Thurs Jun 13 2019 00:00:00 GMT+0000',
        classDate: 'Thurs Jun 13 2019 00:00:00 GMT+0000'
      },
      {
        _id: '5d07e2db71a8382af43cd981',
        active: true,
        courseId: '5d07e2d971a8382af43cd954',
        type: 'solo',
        title: 'noza',
        instructions: 'Sabzisini uzojivab mulijo opo ofu kimfewnu giberve fez nas izjowga hobum goolji.',
        dateAvailable: 'Thurs Jun 20 2019 00:00:00 GMT+0000',
        dateDue: 'Thurs Jun 20 2019 00:00:00 GMT+0000',
        dateClosed: 'Thurs Jun 20 2019 00:00:00 GMT+0000',
        classDate: 'Thurs Jun 20 2019 00:00:00 GMT+0000'
      },
      {
        _id: '5d07e2db71a8382af43cd999',
        active: true,
        courseId: '5d07e2d971a8382af43cd954',
        type: 'solo',
        title: 'noza',
        instructions: 'Sabzisini uzojivab mulijo opo ofu kimfewnu giberve fez nas izjowga hobum goolji.',
        dateAvailable: 'Thurs Jun 27 2019 00:00:00 GMT+0000',
        dateDue: 'Thurs Jun 27 2019 00:00:00 GMT+0000',
        dateClosed: 'Thurs Jun 27 2019 00:00:00 GMT+0000',
        classDate: 'Thurs Jun 27 2019 00:00:00 GMT+0000'
      }
    ],
    subs: [
      {
        '_id': '5d07e2db71a8382af43cd975',
        'graded': false,
        'assignment': '5d07e2db71a8382af43cd999',
        'student': '5d07e2db71a8382af43cd9bc',
        'submission': 'Mo gup fucabmig nu iti it evesa ovirew dalkoju avhi zipgoh ato mad.',
        'updatedAt': 'Thurs Jun 27 2019 00:00:00 GMT+0000',
        'createdAt': 'Thurs Jun 27 2019 00:00:00 GMT+0000'
      },
      {
        '_id': '5d07e2db71a8382af43cd981',
        'graded': true,
        'assignment': '5d07e2db71a8382af43cd97c',
        'student': '5d07e2db71a8382af43cd9bc',
        'submission': 'Mo gup fucabmig nu iti it evesa ovirew dalkoju avhi zipgoh ato mad.',
        'updatedAt': 'Thurs Jun 27 2019 00:00:00 GMT+0000',
        'createdAt': 'Thurs Jun 27 2019 00:00:00 GMT+0000'
      },
      {
        '_id': '5d07e2db71a8382af43cd981',
        'graded': true,
        'assignment': '5d07e2db71a8382af43cd999',
        'student': '5d07e2db71a8382af43cd9bc',
        'submission': 'Mo gup fucabmig nu iti it evesa ovirew dalkoju avhi zipgoh ato mad.',
        'updatedAt': 'Thurs Jun 27 2019 00:00:00 GMT+0000',
        'createdAt': 'Thurs Jun 27 2019 00:00:00 GMT+0000'
      },
    ]
  };
  return leanedAsses(response);
};

const leanedAsses = ({ asses, subs }) => {
  return asses.map(ass => {
    let grade = false;
    let submitted = false;

    subs.forEach(sub => {if(sub.assignment === ass._id) {
      grade = sub.graded;
      submitted = true;
    }});

    return {
      _id: ass._id,
      type: ass.type,
      title: ass.title,
      classDate: ass.classDate,
      submitted: submitted,
      grade: grade
    };
  });
};

// function calculateWeeksBetween(date1, date2) {
//   // The number of milliseconds in one week
//   const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
//   // Convert both dates to milliseconds
//   const date1_ms = date1.getTime();
//   const date2_ms = date2.getTime();
//   // Calculate the difference in milliseconds
//   const difference_ms = Math.abs(date1_ms - date2_ms);
//   // Convert back to weeks and return hole weeks
//   return Math.floor(difference_ms / ONE_WEEK);
// }

// const week = () => ({
//   mon: [],
//   tue: [],
//   wed: [],
//   thur: [],
//   fri: []
// });

// for(let i = 0; i < numWeeks; i++) {
//   const newWeekName = `week${i + 1}`;
//   courseAsses[newWeekName] = week();
//   return courseAsses;
// }

// const courseAsses = {
//   week1: {
//     mon: [],
//     tue: [],
//     wed: [],
//     thur: [],
//     fri: []
//   },
//   week2: {
//     mon: [],
//     tue: [],
//     wed: [],
//     thur: [],
//     fri: []
//   },
//   week3: {
//     mon: [],
//     tue: [],
//     wed: [],
//     thur: [],
//     fri: []
//   },
//   week4: {
//     mon: [],
//     tue: [],
//     wed: [],
//     thur: [],
//     fri: []
//   },
// };
