import { post } from '../request';

export const postAssignment = (course, type, title, instructions, classDate, dateAvailable, dateDue, dateClosed) => {
  return post ('/api/v1/assignments', { course, type, title, instructions, classDate, dateAvailable, dateDue, dateClosed });
};
