import React from 'react';
import PropTypes from 'prop-types';

function RecentSubmission({ date, time, assignment, id, user }) {
  //we only want things here that are not graded yet
  //date/time will probably be saved in the database as one string timestamp
  //these will become links to grading form
  return (
    <>
      <div>
        <h3>{date}</h3>
        <h4>{time}</h4>
      </div>
      <div>
        <h4>{assignment}</h4>
        <p>{user.firstName} {user.lastName}</p>
        <p>{id}</p>
      </div>
    </>
  );
}

RecentSubmission.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  assignment: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

//id is a p right now, but will eventually be used to link to the submission?

export default RecentSubmission;
