import React from 'react';
import PropTypes from 'prop-types';

function ReadingSubmission({ handleSubmit, handleChange, textBody }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea value={textBody} onChange={handleChange}></textarea>
        <button>Submit</button>
      </form>
    </>
  );
}

ReadingSubmission.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  textBody: PropTypes.string.isRequired
};

export default ReadingSubmission;
