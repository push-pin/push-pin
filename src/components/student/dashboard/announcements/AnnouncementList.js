import React from 'react';
import PropTypes from 'prop-types';
import Announcement from './Announcement';
import { ListItem, ListItemUl } from '../../../../../styles/components/ListItem';
import { ListItemHeader } from '../../../../../styles/components/ListItemHeader';
import { UpperDashboardContainer } from '../../../../../styles/layout/DashboardContainer';

function AnnouncementList({ announcements, unread }) {
  const announcementListItems = announcements.map(announcement => {   //where do we limit the number of announcements here?
    return (
      <ListItem key={announcement.id}>
        <Announcement date={announcement.date} header={announcement.header} previewText={announcement.previewText} bodyText={announcement.bodyText} id={announcement._id} />
      </ListItem>
    );
  });

  return (
    <UpperDashboardContainer>
      <ListItemHeader>
        <h2>Announcements</h2>
        <h2>{unread}</h2>
      </ListItemHeader>
      <ListItemUl>
        {announcementListItems}
      </ListItemUl>
    </UpperDashboardContainer>
    
  );
}

AnnouncementList.propTypes = {
  announcements: PropTypes.array.isRequired,
  unread: PropTypes.number.isRequired
};

export default AnnouncementList;
// unread is the number of announcements that are new/haven't been opened in detail by a user. In the wireframe, its the number in the circle to the right of the "announcements" header 
