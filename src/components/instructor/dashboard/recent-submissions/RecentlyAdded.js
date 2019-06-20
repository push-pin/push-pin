import React from 'react';
import PropTypes from 'prop-types';
import formattedDate from '../../../../utils/date-formatter';
import abridgedText from '../../../../utils/text-abridge';

function RecentlyAdded({ updatedAt, submission, student, id, assignment }) {
  const date = formattedDate(updatedAt);
  const shortSub = abridgedText(submission);
  //these will become links to grading form
  return (
    <>
      <div className="date">
        <h3>{date.month}/{date.day}/{date.year} :: {date.time}</h3>
      </div>
      <div className="info">
        <h4 className="recentEvent">{assignment}</h4>
        <p className="recentSubmission">{student}: {shortSub}</p>
        <p>{id}</p>
      </div>
    </>
  );
}

RecentlyAdded.propTypes = {
  updatedAt: PropTypes.string.isRequired,
  student: PropTypes.string.isRequired,
  submission: PropTypes.string.isRequired,
  assignment: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

//id is a p right now, but will eventually be used to link to the submission?

export default RecentlyAdded;
