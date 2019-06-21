import { CREATE_ASSIGNMENT, CREATE_ASSIGNMENT_PENDING, CREATE_ASSIGNMENT_ERROR } from '../../actions/instructor/createAssignmentActions';

const initialState = {
  loading: false,
  error: {},
  course: '',
  type: '',
  title: '',
  instructions: '',
  classDate: '',
  dateAvailable: '', 
  dateDue: '', 
  dateClosed: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_ASSIGNMENT:
      return { ...state, course: action.payload.course, type: action.payload.type, title: action.payload.title, instructions: action.payload.instructions, classDate: action.payload.classDate, dateAvailable: action.payload.dateAvailable, dateDue: action.payload.dateDue, dateClosed: action.payload.dateClosed, loading: false };
    case CREATE_ASSIGNMENT_PENDING:
      return { ...state, loading: true };
    case CREATE_ASSIGNMENT_ERROR: 
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
