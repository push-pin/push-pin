import React from 'react';
import PropTypes from 'prop-types';

function Announcement({ date, header, previewText }) {
  return (
    <> 
     {/*make this a link to announcement detail  */}
     <h3>{date}</h3>
     <h4>{header}</h4>
     <p>{previewText}</p>
    </>
  );
}

Announcement.propTypes = {
  date: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  previewText: PropTypes.string.isRequired
};

export default Announcement;
