export const selectAnnouncements = state => state.dashboard.announcements.announcements;
export const selectUnreadAnnouncements = state => state.dashboard.announcements.unread;
export const selectAnnouncementsLoading = state => state.dashboard.announcements.loading;
export const selectAnnouncementsError = state => state.dashboard.announcements.error;
