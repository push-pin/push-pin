import React from 'react';
import PropTypes from 'prop-types';
import DayItem from './DayItem';

function DayList({ dayArray }) {
  const dayItems = dayArray.map(item => {
    return (
      <li key={item._id}>
        <DayItem type={item.type} title={item.title} dueDate={item.dueDate} graded={item.graded} />
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

DayList.propTypes = {
  dayArray: PropTypes.array.isRequired,
};

export default DayList;
