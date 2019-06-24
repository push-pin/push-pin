import React from 'react';
import PropTypes from 'prop-types';
import { LinkStyled } from '../../../../../styles/components/LinkStyled';


function DayItem({ type, title, submitted, _id }) {

  let hasSubed = 'Unsubmitted';
  if(submitted) hasSubed = 'Submitted';

  return (
    <LinkStyled to={`/${_id}`}>
      <div className="type">
        <h4 className="sub-title">{type}</h4>
      </div>
      <div className="assignment-detail">
        <h4>{title}</h4>
      </div>
    </LinkStyled>
  );
}

DayItem.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classDate: PropTypes.string,
  _id: PropTypes.string.isRequired
};

export default DayItem;
