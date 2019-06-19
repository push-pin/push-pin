import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function DayItem({ type, title, dateDue, submitted, _id }) {
  return (
    <Link to={`/${_id}`}>
      <div className="type">
        <h3>{type}</h3>
      </div>
      <div className="assignment-detail">
        <h4>{title}</h4>
        <p>{dateDue}</p>
        <p>Submitted: {submitted}</p>
      </div>
    </Link>
  );
}

DayItem.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dateDue: PropTypes.string,
  submitted: PropTypes.bool.isRequired,
  _id: PropTypes.string.isRequired
};

//completed is a boolean, will eventually be represented as checkmark, color, something along those lines

export default DayItem;
