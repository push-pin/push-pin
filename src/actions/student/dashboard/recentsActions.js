import { createAction } from 'promise-middleware-redux';
import { fetchRecents } from '../../../services/student/dashboard/recentItemServices';

export const [
  getRecents,
  GET_RECENTS,
  GET_RECENTS_PENDING,
  GET_RECENTS_ERROR
] = createAction('GET_RECENTS', fetchRecents);
