export const selectAssignments = state => state.assignments.map((assignment, id) => ({
  ...assignment,
  id
}));

export const selectAssignmentById = (state, assignmentId) => (state.assignments[assignmentId]);

export const selectAssignmentDetailById = state => state.assignment.assignment;
