import React from 'react';
import PropTypes from 'prop-types';

function ReadingForm({ handleSubmit, handleChange, textBody }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea name="textBody" value={textBody} onChange={handleChange}></textarea>
        <button>Submit</button>
      </form>
    </>
  );
}

ReadingForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  textBody: PropTypes.string.isRequired
};

export default ReadingForm;
