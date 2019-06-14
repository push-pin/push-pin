import React from 'react';
import PropTypes from 'prop-types';
import RecentSubmission from './RecentSubmission';

function RecentSubList({ recentArray }) {
  const recentSubs = recentArray.map(item => {
    return (
      <li key={item._id}>
        <RecentSubmission date={item.date} time={item.time} assignment={item.assignment} user={item.user} id={item._id} />
      </li>
    );
  });

  return (
    <div>
      <div>
        <h2>Recent Submissions</h2>
      </div>
      <ul>
        {recentSubs}
      </ul>
    </div>
  );
}

RecentSubList.propTypes = {
  recentArray: PropTypes.array.isRequired,
};

export default RecentSubList;
