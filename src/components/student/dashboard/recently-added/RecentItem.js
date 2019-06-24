import React from 'react';
import PropTypes from 'prop-types';
import formattedDate from '../../../../utils/date-formatter';

import abridgedText from '../../../../utils/text-abridge';

function RecentItem({ updatedAt, assignment, grade, firstName, lastName, comment }) {
  const date = formattedDate(updatedAt);
  
  return (
    <>
      <div className="date">
        <h3>{date.month} {date.day}</h3>
        <h3>{date.time}</h3>

      </div>
      <div className="info">
        <h4 className="recentEvent">{assignment}</h4>
        <p className="recentSubmission">{firstName} {lastName} {comment ? ': ' + abridgedText(comment, 15) : ''}</p>
        <p className="recentSubmission">{grade}</p>
      </div>
    </>
  );
}

RecentItem.propTypes = {
  updatedAt: PropTypes.string,
  comment: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  grade: PropTypes.number,
  assignment: PropTypes.string,
};

export default RecentItem;
