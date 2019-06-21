import React from 'react';
import PropTypes from 'prop-types';
import RecentItem from './RecentItem';
import { ListItem, ListItemUl } from '../../../../../styles/components/ListItem';
import { ListItemHeader } from '../../../../../styles/components/ListItemHeader';
import { UpperDashboardContainer } from '../../../../../styles/layout/DashboardContainer';

function RecentList({ recentlyArr }) {
  const recentItems = recentlyArr.map(item => {
    if(item.grade) {
      return <ListItem key={item._id}>
        <RecentItem updatedAt={item.updatedAt} assignment={item.assignment.title} grade={item.grade} />
      </ListItem>;
    } else {
      return <ListItem key={item._id}>
        <RecentItem updatedAt={item.updatedAt} assignment={item.submission.assignment.title} firstName={item.commenter.firstName} lastName={item.commenter.lastName} comment={item.comment}/>
      </ListItem>;
    }
  });
  return (
    <UpperDashboardContainer>
      <ListItemHeader>
        <h2>Recent Updates</h2>
        <div>
          <h3>6</h3>
        </div>
      </ListItemHeader>
      <ListItemUl>
        {recentItems}
      </ListItemUl>
    </UpperDashboardContainer>
  );
}


RecentList.propTypes = {
  recentlyArr: PropTypes.array.isRequired
};

export default RecentList;
