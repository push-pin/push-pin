import React from 'react';
import PropTypes from 'prop-types';
import formattedDate from '../../../../utils/date-formatter';
import abridgedText from '../../../../utils/text-abridge';

function RecentlyAdded({ updatedAt, student, id, assignment }) {
  const date = formattedDate(updatedAt);
  //these will become links to grading form
  return (
    <>
      <div className="date">
        <h3>{date.month}/{date.day}/{date.year} :: {date.time}</h3>
      </div>
      <div className="info">
        <h4 className="recentEvent">{assignment.title}</h4>
        <p className="recentSubmission">Student: {student.firstName} {student.lastName}</p>
        <p style={{ visibility: 'hidden' }}>{id}</p>
      </div>
    </>
  );
}

RecentlyAdded.propTypes = {
  updatedAt: PropTypes.string.isRequired,
  student: PropTypes.object,
  assignment: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

//id is a p right now, but will eventually be used to link to the submission?

export default RecentlyAdded;
