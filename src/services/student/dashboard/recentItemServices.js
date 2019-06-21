import { get } from '../../request';

export const fetchRecents = (studentId) => {
  return Promise.all([
    get(`/api/v1/comments/recent/${studentId}`),
    get(`/api/v1/grades/student/recent/${studentId}`)
  ])
    .then(([comments, grades]) => {
      return [...comments, ...grades];
    });
};

