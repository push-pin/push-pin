export const selectWeek = state => {
  return state.dashboard.weekAtGlance.assignments.weeksAsses;
};
export const selectWeekLoading = state => state.dashboard.weekAtGlance.loading;
export const selectWeekError = state => state.dashboard.weekAtGlance.error;

