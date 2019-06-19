import { get } from '../../request';

export const getAnnouncementsByCourse = courseId => {
  return get(`/api/v1/announcements/${courseId}`);
};
