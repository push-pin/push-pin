import { createAction } from 'promise-middleware-redux';
import { postAssignment } from '../../services/teacher/assignmentCreationServices';

export const [
  createAssignment, 
  CREATE_ASSIGNMENT,
  CREATE_ASSIGNMENT_PENDING,
  CREATE_ASSIGNMENT_ERROR
] = createAction('CREATE_ASSIGNMENT', postAssignment);
