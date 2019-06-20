import React from 'react';
import PropTypes from 'prop-types';
import ReadingResponse from './ReadingResponse';
import { ListItemSubmission, ListItemUlWeek } from '../../../../../../styles/components/ListItem';

function ReadingResponses({ responseArray }) {
  const responseList = responseArray.map(response => (
    <ListItemSubmission key={response._id}>
      <ReadingResponse submission={response.submission} student={response.student} createdAt={response.createdAt} />
    </ListItemSubmission>
  ));

  return (
    <ListItemUlWeek>
      {responseList}  
    </ListItemUlWeek>
  );
}

ReadingResponses.propTypes = {
  responseArray: PropTypes.array.isRequired
};

export default ReadingResponses;
