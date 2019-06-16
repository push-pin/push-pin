import React from 'react';
import PropTypes from 'prop-types';
import RecentItem from './RecentItem';
import { ListItem } from '../../../../../styles/components/ListItem';
import { ListItemHeader } from '../../../../../styles/components/ListItemHeader';

function RecentList({ recentlyArr, unread }) {
  const recentItems = recentlyArr.map(item => {
    return (
      <ListItem key={item._id}>
        <RecentItem date={item.date} time={item.time} title={item.title} submissionType={item.submissionType} eventType={item.eventType} id={item._id} />
      </ListItem>
    );
  });

  return (
    <div>
      <ListItemHeader>
        <h2>Recent Updates</h2>
        <h2>{unread}</h2>
      </ListItemHeader>
      <ul>
        {recentItems}
      </ul>
    </div>
  );
}

RecentList.propTypes = {
  recentlyArr: PropTypes.array.isRequired,
  unread: PropTypes.number.isRequired
};

export default RecentList;
