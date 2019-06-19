import React from 'react';
import PropTypes from 'prop-types';
import ReadingResponse from './ReadingResponse';

function ReadingResponses({ responseArray }) {
  const responseList = responseArray.map(response => (
    <li key={response._id}>
      <ReadingResponse submission={response.submission} student={response.student} createdAt={response.createdAt} />
    </li>
  ));

  return (
    <ul>
      {responseList}  
    </ul>
  );
}

ReadingResponses.propTypes = {
  responseArray: PropTypes.array.isRequired
};

export default ReadingResponses;
