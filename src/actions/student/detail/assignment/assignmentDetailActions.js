import { createAction } from 'promise-middleware-redux';
import { getAssignmentById } from '../../../../services/student/detail/assignmentSubmissionServices';

export const [
  fetchAssignmentDetail,
  FETCH_ASSIGNMENT_DETAIL,
  FETCH_ASSIGNMENT_DETAIL_PENDING,
  FETCH_ASSIGNMENT_DETAIL_ERROR
] = createAction('FETCH_ASSIGNMENT_DETAIL', getAssignmentById);
