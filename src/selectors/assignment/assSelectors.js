export const selectAssesByCourse = state => state.courseAsses.asses;
export const selectCourse = state => state.user.currentCourses[0]._id;
export const selectStudent = state => state.user.user._id;
