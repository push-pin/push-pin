import React from 'react';
import PropTypes from 'prop-types';
import RecentlyAdded from './RecentlyAdded';

function RecentAddList({ recentArray, unread }) {
  const recentSubs = recentArray.map(item => {
    return (
      <li key={item._id}>
        <RecentlyAdded date={item.date} time={item.time} itemTitle={item.itemTitle} user={item.user} id={item._id} />
      </li>
    );
  });

  return (
    <div>
      <div>
        <h2>Recently Submitted</h2>
      </div>
      <p>{unread}</p>
      <ul>
        {recentSubs}
      </ul>
    </div>
  );
}

RecentAddList.propTypes = {
  recentArray: PropTypes.array.isRequired,
  unread: PropTypes.number.isRequired
};

export default RecentAddList;
