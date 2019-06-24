import { post } from '../services/request';

function createAssignment(course, type, title, instructions, classDate, dateAvailable, dateDue, dateClosed) {
  return post('/api/v1/assignments', { course, type, title, instructions, classDate, dateAvailable, dateDue, dateClosed });
}

createAssignment(
  '5d0bb7e32fd069001762b8c0'
);
