export const selectWeek = state => {
  console.log('selector week', state.dashboard.weekAtGlance.assignments.weeksAsses);
  return state.dashboard.weekAtGlance.assignments.weeksAsses;
};
export const selectWeekLoading = state => state.dashboard.weekAtGlance.loading;
export const selectWeekError = state => state.dashboard.weekAtGlance.error;

// export const getWeek = state => state.weekAtGlance.assignments;
// export const getWeekLoading = state => state.weekAtGlance.loading;
// export const getWeekError = state => state.weekAtGlance.error;
