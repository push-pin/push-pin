import React from 'react';
import PropTypes from 'prop-types';
import DayItem from './dayItem';

function DayList({ dayArray }) {
  const dayItems = dayArray.map(item => {
    return (
      <li key={item._id}>
        <DayItem type={item.type} title={item.title} dueDate={item.dueDate} submitted={item.submitted} />
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
