import React from 'react';
import PropTypes from 'prop-types';

function DayItem({ type, title, dueDate, graded }) {
  return (
    <>
      <h3>{type}</h3>
      <h4>{title}</h4>
      <p>{dueDate}</p>
      <p>Graded: {submitted}</p> 
      //this is where we want how many are graded
    </>
  );
}

DayItem.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string,
  graded: PropTypes.bool.isRequired
};

//completed is a boolean, will eventually be represented as checkmark, color, something along those lines

export default DayItem;
