import React from 'react';
import PropTypes from 'prop-types';
import RecentlyAdded from './RecentlyAdded';

function RecentAddList({ recentArray }) {
  const recentSubs = recentArray.map(item => {
    return (
      <li key={item._id}>
        <RecentlyAdded date={item.date} time={item.time} itemTitle={item.title} user={item.user} id={item._id} />
      </li>
    );
  });

  return (
    <div>
      <div>
        <h2>Recently Added</h2>
      </div>
      <ul>
        {recentSubs}
      </ul>
    </div>
  );
}

RecentAddList.propTypes = {
  recentArray: PropTypes.array.isRequired,
};

export default RecentAddList;
