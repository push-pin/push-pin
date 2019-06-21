import React from 'react';
import PropTypes from 'prop-types';
import { ListItemWeek } from '../../../styles/components/ListItem';
import DayItem from '../student/dashboard/week-glance/DayItem';

function Assignments({ assignments }) {
  const assignmentListItems = assignments.map(ass => {
    return (
      <ListItemWeek key={`${ass._id}-${ass._date}`}>
        <DayItem 
          type={ass.type} 
          title={ass.title}
          dateDue={ass.classDate}
          submitted={ass.submitted}
          _id={ass._id}
        />
      </ListItemWeek>
    );
  });

  return (
    <ul>
      {assignmentListItems}
    </ul>
  );
}

Assignments.propTypes = {
  assignments: PropTypes.array.isRequired
};

export default Assignments;
