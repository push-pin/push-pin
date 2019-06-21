import React from 'react';
import PropTypes from 'prop-types';
import RecentlyAdded from './RecentlyAdded';
import { ListItem, ListItemUl } from '../../../../../styles/components/ListItem';
import { ListItemHeader } from '../../../../../styles/components/ListItemHeader';
import { UpperDashboardContainer } from '../../../../../styles/layout/DashboardContainer';

function RecentAddList({ recentArray, recent }) {
  const recentSubs = recentArray.map(item => {
    console.log(recentArray, 'recentArray');
    return (
      <ListItem key={item._id}>
        <RecentlyAdded updatedAt={item.updatedAt} student={item.student} assignment={item.assignment} submission={item.submission} id={item._id} />
      </ListItem>
    );
  });

  return (
    <UpperDashboardContainer>
      <ListItemHeader>
        <h2>Recently Submitted</h2>
        <div>
          <h3>{recent}</h3>
        </div>
      </ListItemHeader>
      <ListItemUl>
        {recentSubs}
      </ListItemUl>
    </UpperDashboardContainer>
  );
}

RecentAddList.propTypes = {
  recentArray: PropTypes.array.isRequired,
  recent: PropTypes.number.isRequired
};

export default RecentAddList;
