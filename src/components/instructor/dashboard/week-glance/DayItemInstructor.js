import React from 'react';
import PropTypes from 'prop-types';

function DayItemInstructor({ type, title, dueDate, totalGraded, totalSubmissions, totalStudents }) {
  const toGrade = totalSubmissions - totalGraded;
  return (
    <>
      <h3>{type}</h3>
      <h4>{title}</h4>
      <p>{dueDate}</p>
      <p>To Grade: {toGrade}</p>
      <p>Submitted: {totalSubmissions} / {totalStudents}</p> 
      <p></p>
    </>
  );
}

DayItemInstructor.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string,
  totalGraded: PropTypes.number.isRequired,
  totalSubmissions: PropTypes.number.isRequired,
  totalStudents: PropTypes.number.isRequired
};

export default DayItemInstructor;
