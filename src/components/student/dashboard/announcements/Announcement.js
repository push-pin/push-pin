import React from 'react';
import PropTypes from 'prop-types';

function Announcement({ title, body, id, updatedAt }) {
  
  //POSSIBLE means to have the body text get reformatted for the LI, breaking everything at the moment
  // function abridgedText(bodyText) {
  //   if(bodyText.length > 5) {
  //     return (bodyText.subString(0, 5) + '...');
  //   }
  // }

  return (
    <> 
     {/*make this a link to announcement detail, using announcement id  */}
      <div className="date">
        <h3>{updatedAt}</h3>
      </div>
      <div className="info">
        <h4>{title}</h4>
        <p className="preview">{body}</p>
        <p>{body}</p>
        <p>{id}</p>  {/*delete this later once link is created */}
      </div>
    </>
  );
}

Announcement.propTypes = {
  announcement: PropTypes.shape({
    updatedAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })
};

export default Announcement;
