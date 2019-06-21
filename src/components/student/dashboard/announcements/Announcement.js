import React from 'react';
import PropTypes from 'prop-types';
import { LinkStyled } from '../../../../../styles/components/LinkStyled';
import formattedDate from '../../../../utils/date-formatter';
import abridgedText from '../../../../utils/text-abridge';


function Announcement({ title, body, id, updatedAt }) {

  const date = formattedDate(updatedAt);
  const shortBody = abridgedText(body, 20);

  return (
    <> 
     {/*make this a link to mark as read and increment unread counter - how will we track whether a specific user has read an announcement? */}
     {/* <LinkStyled > */}
       <div className="date">
         <h3>{date.month} {date.day}</h3>
         <h3>{date.time}</h3>
       </div>
       <div className="info">
         <h4>{title}</h4>
         <p className="preview">{shortBody}</p>
         <p>{id}</p>  {/*delete this later once link is created */}
       </div>
     {/* </LinkStyled> */}
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
