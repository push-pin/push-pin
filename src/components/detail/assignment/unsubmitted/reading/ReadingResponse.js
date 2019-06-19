import React from 'react';
import PropTypes from 'prop-types';

function ReadingResponse({ submission, student, createdAt }) {
  return (
    <>
    <section>
      <h3>{student.firstName} {student.lastName}</h3>
      <p>{createdAt}</p>
    </section>
    <p>
      {submission}
    </p>
    </>
  );
}

ReadingResponse.propTypes = {
  submission: PropTypes.string.isRequired,
  student: PropTypes.object.isRequired,
  createdAt: PropTypes.string.isRequired
};

export default ReadingResponse;
