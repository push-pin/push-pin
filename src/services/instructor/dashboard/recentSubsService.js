import { get } from '../../request';

export const fetchRecents = courseId => {
  return get(`/api/v1/submissions/recent/${courseId}`);
};

