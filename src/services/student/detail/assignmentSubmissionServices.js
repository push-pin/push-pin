import { post, get, put } from '../../request';

export const postSubmission = (assignment, student, submission) => {
  console.log('assignment:', assignment);
  console.log('student:', student);
  console.log('submission:', submission);
  post('/api/v1/submissions', { assignment, student, submission });
};
