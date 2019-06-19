import React from 'react';
import PropTypes from 'prop-types';
//we want to add grade and possible points to this

function AssignmentDetail({ assignment, submitted, grade }) {
  console.log('assignment in assn detail', typeof assignment.type);
  return (
    <section>
      <h3>{assignment.type}</h3>
      <h4>{assignment.title}</h4>
      <p>{assignment.dateDue}</p>
      <p>{assignment.instructions}</p>
      <p>Submitted: {submitted}</p>
      <p>Grade: {grade}</p>
    </section>
  );
}

AssignmentDetail.propTypes = {
  submitted: PropTypes.bool,
  grade: PropTypes.number,
  assignment: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    dateDue: PropTypes.string.isRequired
  })
};

export default AssignmentDetail;
