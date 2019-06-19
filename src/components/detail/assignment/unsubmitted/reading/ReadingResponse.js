import React from 'react';
import PropTypes from 'prop-types';

function ReadingResponse({ submission, student, createdAt }) {
  return (
    <>
    <section>
      <h3>{student}</h3>
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
  student: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};

export default ReadingResponse;
