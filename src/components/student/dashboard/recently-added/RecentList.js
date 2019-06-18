import React from 'react';
import PropTypes from 'prop-types';
import RecentItem from './RecentItem';
import { ListItem, ListItemUl } from '../../../../../styles/components/ListItem';
import { ListItemHeader } from '../../../../../styles/components/ListItemHeader';
import { UpperDashboardContainer } from '../../../../../styles/layout/DashboardContainer';

function RecentList({ recentlyArr, unread }) {
  const recentItems = recentlyArr.map(item => {
    return (
      <ListItem key={item._id}>
        <RecentItem date={item.date} time={item.time} title={item.title} submissionType={item.submissionType} eventType={item.eventType} id={item._id} />
      </ListItem>
    );
  });

  return (
    <UpperDashboardContainer>
      <ListItemHeader>
        <h2>Recent Updates</h2>
        <div>
          <h3>{unread}</h3>
        </div>
      </ListItemHeader>
      <ListItemUl>
        {recentItems}
      </ListItemUl>
    </UpperDashboardContainer>
  );
}

RecentList.propTypes = {
  recentlyArr: PropTypes.array.isRequired,
  unread: PropTypes.number.isRequired
};

export default RecentList;
