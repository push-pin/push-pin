import React from 'react';
import PropTypes from 'prop-types';
import ReadingResponse from './ReadingResponse';
import { ListItemWeek, ListItemUlWeek } from '../../../../../../styles/components/ListItem';

function ReadingResponses({ responseArray }) {
  const responseList = responseArray.map(response => (
    <ListItemWeek key={response._id}>
      <ReadingResponse submission={response.submission} student={response.student} createdAt={response.createdAt} />
    </ListItemWeek>
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
