import React from 'react';
import PropTypes from 'prop-types';
import ReadingResponse from './ReadingResponse';

function ReadingResponses({ responseArray }) {
  const responseList = responseArray.map(response => (
    <li key={response._id}>
      <ReadingResponse bodyText={response.bodyText} username={response.username} timeStamp={response.timeStamp} />
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
