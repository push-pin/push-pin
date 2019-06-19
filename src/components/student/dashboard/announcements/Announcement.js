import React from 'react';
import PropTypes from 'prop-types';

function Announcement({ date, header, previewText, bodyText, id }) {
  
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
        <h3>{date}</h3>
      </div>
      <div className="info">
        <h4>{header}</h4>
        <p className="preview">{previewText}</p>
        <p>{bodyText}</p>
        <p>{id}</p>  {/*delete this later once link is created */}
      </div>
    </>
  );
}

Announcement.propTypes = {
  date: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  previewText: PropTypes.string.isRequired,
  id: PropTypes.string,
  bodyText: PropTypes.string.isRequired
};

export default Announcement;
