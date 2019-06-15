import { createAction } from 'promise-middleware-redux';
import { fetchRecentSubs } from '../../instructor/dashboard/instWeekActions';

export const [
  getRecentSubs,
  GET_RECENT_SUBS,
  GET_RECENT_SUBS_PENDING,
  GET_RECENT_SUBS_ERROR
] = createAction('GET_RECENT_SUBS', fetchRecentSubs);
