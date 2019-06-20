import { createAction } from 'promise-middleware-redux';
import { fetchAssesByCourse } from '../../services/assignments/assignmentServices';

export const [
  getAssesByCourse,
  GET_ASSES_BY_COURSE,
  GET_ASSES_BY_COURSE_PENDING,
  GET_ASSES_BY_COURSE_ERROR
] = createAction('GET_ASSES_BY_COURSE', fetchAssesByCourse);
