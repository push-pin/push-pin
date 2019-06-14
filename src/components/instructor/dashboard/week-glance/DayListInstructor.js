import React from 'react';
import PropTypes from 'prop-types';
import DayItemInstructor from './DayItemInstructor';

function DayListInstructor({ dayArray }) {
  const dayItems = dayArray.map(item => {
    return (
      <li key={item._id}>
        <DayItemInstructor type={item.type} title={item.title} dueDate={item.dueDate} graded={item.graded} />
      </li>
    );
  });

  return (
    <>
      <ul>
        {dayItems}
      </ul>
    </>
  );
}

DayListInstructor.propTypes = {
  dayArray: PropTypes.array.isRequired,
};

export default DayListInstructor;
