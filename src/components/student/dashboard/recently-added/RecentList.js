import React from 'react';
import PropTypes from 'prop-types';
import RecentItem from './RecentItem';
import { ListItem, ListItemUl } from '../../../../../styles/components/ListItem';
import { ListItemHeader } from '../../../../../styles/components/ListItemHeader';
import { UpperDashboardContainer } from '../../../../../styles/layout/DashboardContainer';

function RecentList({ recentlyArr, recent }) {
  const recentItems = recentlyArr.map(item => {
    return (
      <ListItem key={item._id}>
        <RecentItem updatedAt={item.updatedAt} comment={item.comment} />
        {/* <RecentItem updatedAt={item.updatedAt} comment={item.comment} firstName={item.firstName} lastName={item.lastName} eventType={item.eventType} grade={item.grade} itemId={item._id} assignmentTitle={item.assignment.title} assignmentId={item.assignment._id} /> */}
      </ListItem>
    );
  });

  return (
    <UpperDashboardContainer>
      <ListItemHeader>
        <h2>Recent Updates</h2>
        <div>
          <h3>{recent}</h3>
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
  recent: PropTypes.number.isRequired
};

export default RecentList;
