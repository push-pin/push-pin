import React from 'react';
import PropTypes from 'prop-types';

function dayItem({ type, title, dueDate }) {
  return (
    <>
      <h3>{type}</h3>
      <h4>{title}</h4>
      <p>{dueDate}</p>
    </>
  );
}

dayItem.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired
};

export default dayItem;
