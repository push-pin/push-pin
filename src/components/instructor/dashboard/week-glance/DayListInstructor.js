import React from 'react';
import PropTypes from 'prop-types';
import DayItemInstructor from './DayItemInstructor';
import { ListItemWeek, ListItemUlWeek } from '../../../../../styles/components/ListItem';


function DayListInstructor({ dayArray }) {
  const dayItems = dayArray.map(item => {
    return (
      <ListItemWeek key={item._id}>
        <DayItemInstructor type={item.type} title={item.title} dueDate={item.dueDate} totalGraded={item.totalGraded} totalStudents={item.totalStudents} totalSubmissions={item.totalSubmissions}/>
      </ListItemWeek>
    );
  });

  return (
    <>
      <ListItemUlWeek>
        {dayItems}
      </ListItemUlWeek>
    </>
  );
}

DayListInstructor.propTypes = {
  dayArray: PropTypes.array.isRequired,
};

export default DayListInstructor;
