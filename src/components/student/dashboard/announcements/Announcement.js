import React from 'react';
import PropTypes from 'prop-types';

function Announcement({ date, header, previewText, bodyText, id }) {
  return (
    <> 
     {/*make this a link to announcement detail, using announcement id!! */}
     <h3>{date}</h3>
     <h4>{header}</h4>
     <p>{previewText}</p>
     <p>{bodyText}</p>
     <p>{id}</p>  {/*delete this later once link is created */}
    </>
  );
}

Announcement.propTypes = {
  date: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  previewText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired
};

export default Announcement;
