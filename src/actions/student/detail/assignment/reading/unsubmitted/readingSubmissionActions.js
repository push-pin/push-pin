import { createAction } from 'promise-middleware-redux';
import { postSubmission } from '../../../../../../services/student/detail/assignmentSubmissionServices';

export const [
  createSubmission,
  CREATE_SUBMISSION,
  CREATE_SUBMISSION_PENDING,
  CREATE_SUBMISSION_ERROR
] = createAction('CREATE_SUBMISSION', postSubmission);
