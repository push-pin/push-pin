import React from 'react';
import PropTypes from 'prop-types';
import formattedDate from '../../../../utils/date-formatter';

function RecentItem({ date, time, title, submissionType, eventType, id }) {
  //date/time will probably be saved in the database as one string timestamp

  const formatted = formattedDate(date);
  return (
    <>
      <div className="date">
        <h3>{formatted.month} {formatted.date}</h3>
        <h4>{formatted.time}</h4>
      </div>
      <div className="info">
        <h4 className="recentEvent">{eventType}</h4>
        <p className="recentSubmission">{submissionType}: {title}</p>
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
  id: PropTypes.string
};

//id is a p right now, but will eventually be used to link to the submission?

export default RecentItem;
