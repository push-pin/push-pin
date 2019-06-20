import React from 'react';
import PropTypes from 'prop-types';
import formattedDate from '../../../../utils/date-formatter';
import abridgedText from '../../../../utils/text-abridge';

function RecentItem({ updatedAt, comment, firstName, lastName, eventType, itemId, grade, assignmentTitle, assignmentId }) {

  const date = formattedDate(updatedAt);
  const shortComment = abridgedText(comment, 20);

  return (
    <>
      <div className="date">
        <h3>{date.month}/{date.day}/{date.year} :: {date.time}</h3>
      </div>
      <div className="info">
        <h4 className="recentEvent">{eventType}</h4>
        <p className="recentSubmission">{assignmentTitle}</p>
        <p className="recentSubmission">{firstName} {lastName}: {shortComment || grade}</p>
        <p>{itemId} {assignmentId}</p>
      </div>
    </>
  );
}

RecentItem.propTypes = {
  updatedAt: PropTypes.string,
  comment: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  eventType: PropTypes.string,
  itemId: PropTypes.string,
  grade: PropTypes.number,
  assignmentTitle: PropTypes.string,
  assignmentId: PropTypes.string
};

//id is a p right now, but will eventually be used to link to the submission?

export default RecentItem;
