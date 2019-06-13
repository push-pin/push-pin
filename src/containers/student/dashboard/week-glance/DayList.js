import React from 'react';
import PropTypes from 'prop-types';
import DayItem from './dayItem';

function DayList({ dayArray, day, date }) {
  const dayItems = dayArray.map(item => {
    return (
      <li key={item._id}>
        <DayItem type={item.type} title={item.title} dueDate={item.dueDate} submitted={item.submitted} />
      </li>
    );
  });

  return (
    <li>
      <h2>{day}</h2>
      <h3>{date}</h3>
      <ul>
        {dayItems}
      </ul>
    </li>
  );
}

DayList.propTypes = {
  dayArray: PropTypes.array.isRequired,
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default DayList;
