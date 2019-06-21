import { get } from '../../request';

export const fetchWeekAtGlance = (userId, courseId) => {
  return get(`/api/v1/assignments/weekataglance/course/${courseId}/student/${userId}`);
};
