import React from 'react';
import PropTypes from 'prop-types';
import { LinkStyled } from '../../../styles/components/LinkStyled';
import formattedDate from '../../utils/date-formatter';

function DayItem({ type, title, dateDue, submitted, _id, classDate }) {
  let dueDay = formattedDate(dateDue);
  let classDay = formattedDate(classDate);

  let hasSubed = 'Unsubmitted';
  if(submitted) hasSubed = 'Submitted';
  return (
    <LinkStyled to={`/${_id}`}>
      <div className="type">
        <h4 className="sub-title">{type}</h4>
        <h4 className="sub-title">{classDay.day} {classDay.month}</h4>
      </div>
      <div className="assignment-detail">
        <h4>{title}</h4>
        <p>Due: {dueDay.month} {dueDay.day} @ {dueDay.time}</p>
        <p>{hasSubed}</p>
      </div>
    </LinkStyled>
  );
}

DayItem.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dateDue: PropTypes.string,
  classDate: PropTypes.string,
  submitted: PropTypes.bool.isRequired,
  _id: PropTypes.string.isRequired
};

//completed is a boolean, will eventually be represented as checkmark, color, something along those lines

export default DayItem;
