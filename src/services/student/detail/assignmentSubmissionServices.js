import { post, get, put } from '../../request';

export const postSubmission = (assignment, student, submission) => {
  post('/api/v1/submissions', { assignment, student, submission });
};

export const getAssignmentById = assignmentId => {
  get(`api/v1/assignments/${assignmentId}`);
};
