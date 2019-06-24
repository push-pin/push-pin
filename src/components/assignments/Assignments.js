import React from 'react';
import PropTypes from 'prop-types';
import { ListItemWeek } from '../../../styles/components/ListItem';
import Assignment from './Assignment';

function Assignments({ assignments }) {
  const assignmentListItems = assignments.map(ass => {
    return (
      <ListItemWeek key={`${ass._id}-${ass._date}`}>
        <Assignment 
          type={ass.type} 
          title={ass.title}
          dateDue={ass.classDate}
          submitted={ass.submitted}
          _id={ass._id}
          classDate={ass.classDate}
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
