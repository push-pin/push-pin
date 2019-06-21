import React from 'react';
import PropTypes from 'prop-types';
import formattedDate from '../../../../../utils/date-formatter';

function ReadingResponse({ submission, student, createdAt }) {
  const date = formattedDate(createdAt);
  console.log('student', student);
  return (
    <>
    <div className="type">
      <div className="profile-info">
        <h3>{student.firstName}</h3>
        <h3>{student.lastName}</h3>
        <h3>{date.month} {date.day}</h3>
        <h3>{date.time}</h3>
      </div>
    </div>
    <div className="assignment-detail">
      <div dangerouslySetInnerHTML={createMarkup(submission)} />
    </div>
    </>
  );
}

ReadingResponse.propTypes = {
  submission: PropTypes.string.isRequired,
  student: PropTypes.object.isRequired,
  createdAt: PropTypes.string.isRequired
};

export default ReadingResponse;

function createMarkup(string) {
  return { __html: string };
}
