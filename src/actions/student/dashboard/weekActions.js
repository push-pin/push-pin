import { createAction } from 'promise-middleware-redux';
import { fetchWeekAtGlance } from '../../../services/student/dashboard/weekAtGlanceServices';

export const [
  getWeekAtGlance,
  GET_WEEK,
  GET_WEEK_PENDING,
  GET_WEEK_ERROR
] = createAction('GET_WEEK', fetchWeekAtGlance);
