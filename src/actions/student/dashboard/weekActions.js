import { createAction } from 'promise-middleware-redux';
import { fetchWeek } from '../../../services/student/dashboard/weekAtGlanceServices';

export const [
  getWeekAtGlance,
  GET_WEEK,
  GET_WEEK_PENDING,
] = createAction('GET_WEEK', fetchWeek);
