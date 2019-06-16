import { createAction } from 'promise-middleware-redux';
import { fetchInstAnnouncements } from '../../../services/instructor/dashboard/instAnnouncementService';

export const [
  getInstAnnouncements,
  GET_INST_ANNOUNCEMENTS,
  GET_INST_ANNOUNCEMENTS_PENDING,
  GET_INST_ANNOUNCEMENTS_ERROR
] = createAction('GET_INST_ANNOUNCEMENTS', fetchInstAnnouncements);
