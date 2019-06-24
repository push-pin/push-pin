import { get } from '../request';

export const fetchAssesByCourse = (courseId, studentId) => {
  return get(`/api/v1/assignments/courseassignments/course/${courseId}/student/${studentId}`)
    .then(res => leanedAsses(res));
};

const leanedAsses = ({ asses, subs }) => {
  const mapped = asses.map(ass => {
    let grade = false;
    let submitted = false;

    subs.forEach(sub => {
      if(sub.assignment._id === ass._id) {
        grade = sub.graded;
        submitted = true;
      }});

    return {
      _id: ass._id,
      type: ass.type,
      title: ass.title,
      classDate: ass.classDate,
      dateDue: ass.dateDue,
      submitted: submitted,
      grade: grade
    };
  });

  mapped.sort((a, b) => (a.classDate > b.classDate) ? 1 : -1);
  return mapped;
};
