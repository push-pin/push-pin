import React from 'react';
import PropTypes from 'prop-types';

function Announcement({ date, header, previewText, id }) {
  return (
    <> 
     {/*make this a link to announcement detail, using announcement id  */}
     <div className="date">
       <h3>{date}</h3>
     </div>
     <div className="info">
       <h4>{header}</h4>
       <p>{previewText}</p>
       <p>{id}</p>  {/*delete this later once link is created */}
     </div>
    </>
  );
}

Announcement.propTypes = {
  date: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  previewText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Announcement;
