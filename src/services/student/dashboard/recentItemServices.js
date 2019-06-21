import { get } from '../../request';

export const fetchRecents = (studentId) => {
  console.log('is this firing?');
  return Promise.all([
    get(`/api/v1/comments/recent/${studentId}`),
    get(`/api/v1/grades/student/recent/${studentId}`)
  ])
    .then(([comments, grades]) => {
      console.log([...comments, ...grades]);
      return [...comments, ...grades];
    });
};

