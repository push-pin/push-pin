import React from 'react';
import PropTypes from 'prop-types';
import formattedDate from '../../../../utils/date-formatter';
import abridgedText from '../../../../utils/text-abridge';

function RecentItem({ updatedAt, assignment, grade, firstName, lastName, comment }) {

  const date = formattedDate(updatedAt);

  return (
    <>
      <div className="date">
        <h3>{date.month}/{date.day}/{date.year} :: {date.time}</h3>
      </div>
      <div className="info">
        <h4 className="recentEvent">{grade}</h4>
        <p className="recentSubmission">{assignment}</p>
        <p className="recentSubmission">{firstName} {lastName}: {comment}</p>
        {/* <p>{itemId} {assignmentId}</p> */}
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

//id is a p right now, but will eventually be used to link to the submission?

export default RecentItem;
