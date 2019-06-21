import React from 'react';
import PropTypes from 'prop-types';

function ReadingResponse({ submission, student, createdAt }) {
  return (
    <>
    <div className="type">
      <div className="profile-info">
        <h3>{student.firstName}</h3>
        <h3>{student.lastName}</h3>
        <p>{createdAt}</p>
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
