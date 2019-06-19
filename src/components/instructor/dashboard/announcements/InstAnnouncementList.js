import React from 'react';
import PropTypes from 'prop-types';
import Announcement from './InstAnnouncement';
import { ListItem, ListItemUl } from '../../../../../styles/components/ListItem';
import { ListItemHeader } from '../../../../../styles/components/ListItemHeader';
import { UpperDashboardContainer } from '../../../../../styles/layout/DashboardContainer';

function InstAnnouncementList({ announcements, unread }) {
  const announcementListItems = announcements.map(announcement => {   //where do we limit the number of announcements here?
    return (
      <ListItem key={announcement._id}>
        <Announcement date={announcement.date} header={announcement.header} previewText={announcement.previewText} id={announcement._id} />
      </ListItem>
    );
  });

  return (
    <UpperDashboardContainer>
      <ListItemHeader>
        <h2>Announcements</h2>
        <div>
          <h3>{unread}</h3>
        </div>
      </ListItemHeader>
      <ListItemUl>
        {announcementListItems}
      </ListItemUl>
    </UpperDashboardContainer>
    
  );
}

InstAnnouncementList.propTypes = {
  announcements: PropTypes.array.isRequired,
  unread: PropTypes.number.isRequired
};

// unread is the number of announcements that are new/haven't been opened in detail by a user. In the wireframe, its the num
export default InstAnnouncementList;
