import React from 'react';
import PropTypes from 'prop-types';
import Announcement from './InstAnnouncement';

function InstAnnouncementList({ announcements, unread }) {
  const announcementListItems = announcements.map(announcement => {   //where do we limit the number of announcements here?
    return (
      <li key={announcement._id}>
        <Announcement date={announcement.date} header={announcement.header} previewText={announcement.previewText} id={announcement._id} />
      </li>
    );
  });

  return (
    <div>
      <div>
        <h2>Announcements</h2>
        <h2>{unread}</h2>
      </div>
      <ul>
        {announcementListItems}
      </ul>
    </div>
    
  );
}

InstAnnouncementList.propTypes = {
  announcements: PropTypes.array.isRequired,
  unread: PropTypes.number.isRequired
};

// unread is the number of announcements that are new/haven't been opened in detail by a user. In the wireframe, its the num
export default InstAnnouncementList;
