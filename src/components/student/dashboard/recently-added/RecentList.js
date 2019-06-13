import React from 'react';
import PropTypes from 'prop-types';
import RecentItem from './RecentItem';

function RecentList({ recentlyArr, unread }) {
  const recentItems = recentlyArr.map(item => {
    return (
      <li key={item._id}>
        <RecentItem date={item.date} time={item.time} title={item.title} submissionType={item.submissionType} eventType={item.eventType} id={item._id} />
      </li>
    );
  });

  return (
    <div>
      <div>
        <h2>Recent Updates</h2>
        <h2>{unread}</h2>
      </div>
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
