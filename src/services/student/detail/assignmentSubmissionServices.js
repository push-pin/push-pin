import { post, get, put } from '../../request';

export const postSubmission = (assignment, student, submission) => {
  return post('api/v1/submissions', { assignment, student, submission });
};

export const getAssignmentById = assignmentId => {
  return get(`api/v1/assignments/${assignmentId}`);
};
