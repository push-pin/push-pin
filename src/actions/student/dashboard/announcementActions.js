import { createAction } from 'promise-middleware-redux';
import { fetchAnnouncements } from '../../../services/student/dashboard/announcementServices';

export const [
  getAnnouncements,
  GET_ANNOUNCEMENTS,
  GET_ANNOUNCEMENTS_PENDING,
  GET_ANNOUNCEMENTS_ERROR
] = createAction('GET_ANNOUNCEMENTS', fetchAnnouncements);
