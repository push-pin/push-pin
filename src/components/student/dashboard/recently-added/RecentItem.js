import React from 'react';
import PropTypes from 'prop-types';

function RecentItem({ date, time, title, submissionType, eventType, id }) {
  //date/time will probably be saved in the database as one string timestamp

  return (
    <>
      <div className="date">
        <h3>{date}</h3>
        {/* <>{time}</h4> */}
      </div>
      <div className="info">
        <h4 className="recentEvent">{eventType}</h4>
        <p>{submissionType}: {title}</p>
        <p>{id}</p>
      </div>
    </>
  );
}

RecentItem.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  submissionType: PropTypes.string.isRequired,
  eventType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

//id is a p right now, but will eventually be used to link to the submission?

export default RecentItem;
