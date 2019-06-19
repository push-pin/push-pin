import React from 'react';
import PropTypes from 'prop-types';
import Assignment from './Assignment';

function Assignments({ assignments }) {
  const assignmentListItems = assignments.map(ass => {
    return (
      <li key={`${ass._id}-${ass._date}`}>
        <Assignment assignment={ass} />
      </li>
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
