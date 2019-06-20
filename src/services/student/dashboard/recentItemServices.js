import { get } from '../../request';

export const fetchRecents = studentId => {
  return get(`/api/v1/comments/recent/${studentId}`);
};
