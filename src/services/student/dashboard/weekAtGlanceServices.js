import { get } from '../../request';

export const fetchWeekAtGlance = (userId, courseId) => {
  // return get(`/api/v1/assignments/weekataglance/course/5d0c50e51136040017b428fa/student/${userId}`);
  return get(`/api/v1/assignments/weekataglance/course/${courseId}/student/${userId}`);
};
