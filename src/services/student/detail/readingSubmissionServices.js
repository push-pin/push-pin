import { get } from '../../request';

export const getReadingResponses = assignmentId => {
  return get(`api/v1/submissions/assignment/${assignmentId}`);
};
