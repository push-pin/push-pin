import React from 'react';
import PropTypes from 'prop-types';

function ReadingResponse({ bodyText, username, timeStamp }) {
  return (
    <>
    <section>
      <h3>{username}</h3>
      <p>{timeStamp}</p>
    </section>
    <p>
      {bodyText}
    </p>
    </>
  );
}

ReadingResponse.propTypes = {
  bodyText: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
};

export default ReadingResponse;
