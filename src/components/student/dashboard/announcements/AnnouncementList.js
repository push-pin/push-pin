import React from 'react';
import PropTypes from 'prop-types';
import Announcement from './Announcement';
import { ListItem, ListItemUl } from '../../../../../styles/components/ListItem';
import { ListItemHeader } from '../../../../../styles/components/ListItemHeader';
import { UpperDashboardContainer } from '../../../../../styles/layout/DashboardContainer';

function AnnouncementList({ announcements, recent }) {
  const announcementListItems = announcements.map(announcement => {   //where do we limit the number of announcements here?
    return (
      <ListItem key={announcement._id}>
        <Announcement updatedAt={announcement.updatedAt} title={announcement.title} body={announcement.body} id={announcement._id} />
      </ListItem>
    );
  });
  return (
    <UpperDashboardContainer>
      <ListItemHeader>
        <h2>Announcements</h2>
        <div>
          <h3>{recent}</h3>
        </div>
      </ListItemHeader>
      <ListItemUl>
        {announcementListItems}
      </ListItemUl>
    </UpperDashboardContainer>
    
  );
}

AnnouncementList.propTypes = {
  announcements: PropTypes.array.isRequired,
  recent: PropTypes.number.isRequired
};

export default AnnouncementList;

