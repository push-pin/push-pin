import React from 'react';
import PropTypes from 'prop-types';
//this is not being used anywhere - we are using ../../detail/AssignmentDetail
function ReadingInfo({ title, dueDate, classDate, points, bodyText, submitted }) {

  return (
    <>
    <section>
      <div>
        <h1>{title}</h1>
        <p>{classDate}</p>
      </div>
      <div>
        <p>{dueDate}</p>
        <p>{points}</p>
        <p>{submitted}</p>
      </div>
    </section>
    <div dangerouslySetInnerHTML={createMarkup(bodyText)} />
    </>
  );
}

ReadingInfo.propTypes = {
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  classDate: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  bodyText: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired
};

export default ReadingInfo;

function createMarkup(string) {
  return { __html: string };
}
