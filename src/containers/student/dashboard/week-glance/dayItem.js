import React from 'react';
import PropTypes from 'prop-types';

function dayItem({ type, title, dueDate, submitted }) {
  return (
    <>
      <h3>{type}</h3>
      <h4>{title}</h4>
      <p>{dueDate}</p>
      <p>Submitted: {submitted}</p>
    </>
  );
}

dayItem.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string,
  submitted: PropTypes.bool.isRequired
};

//completed is a boolean, will eventually be represented as checkmark, color, something along those lines

export default dayItem;
