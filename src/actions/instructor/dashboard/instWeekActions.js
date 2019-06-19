import { createAction } from 'promise-middleware-redux';
import { fetchInstWeek } from '../../../services/instructor/dashboard/weekGlanceService';

export const [
  getInstWeek,
  GET_INST_WEEK,
  GET_INST_WEEK_PENDING,
  GET_INST_WEEK_ERROR
] = createAction('GET_INST_WEEK', fetchInstWeek);
