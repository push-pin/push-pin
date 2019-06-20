import React from 'react';
import PropTypes from 'prop-types';

function Assignment({ assignment }) {
  let gradeDisplay = 'Incomplete';
  if(assignment.grade) {
    gradeDisplay = 'Completed';
  }

  return (
    <>
      <p>{assignment.classDate}</p>
      <p>{assignment.title}</p>
      <p>Submitted: {assignment.submitted}</p>
      <p>{gradeDisplay}</p>
    </>
  );
}

Assignment.propTypes = {
  assignment: PropTypes.shape({
    classDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    submitted: PropTypes.bool.isRequired,
    // will eventually be a number if graded
    grade: PropTypes.bool.isRequired
  }).isRequired
};

export default Assignment;
