import { get } from '../../request';

export const fetchRecentSubs = courseId => {
  return get(`/api/v1/submissions/recent/${courseId}`);
};

