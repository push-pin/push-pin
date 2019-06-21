import React from 'react';
import PropTypes from 'prop-types';
import formattedDate from '../../../../utils/date-formatter';
import abridgedText from '../../../../utils/text-abridge';


function Announcement({ title, body, id, updatedAt }) {

  const date = formattedDate(updatedAt);
  const shortBody = abridgedText(body, 20);

  return (
    <> 
       <div className="date">
         <h3>{date.month} {date.day}</h3>
         <h3>{date.time}</h3>
       </div>
       <div className="info">
         <h4>{title}</h4>
         <p className="preview">{shortBody}</p>
         <p style={{ visibility: 'hidden' }}>{id}</p>  
       </div>
    </>
  );
}

Announcement.propTypes = {
  updatedAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Announcement;
