import React from 'react';
import PropTypes from 'prop-types';
import DayItem from './DayItem';
import { ListItemWeek, ListItemUlWeek } from '../../../../../styles/components/ListItem';

function DayList({ dayArray }) {
  const dayItems = dayArray.map(item => {
    return (
      <ListItemWeek key={item._id}>
        <DayItem 
          type={item.type} 
          title={item.title}
          dateDue={item.dateDue}
          submitted={item.submitted}
          _id={item._id}
        />
      </ListItemWeek>
    );
  });

  return (
    <>
      <ListItemUlWeek>
        {dayItems}
      </ListItemUlWeek>
    </>
  );
}

DayList.propTypes = {
  dayArray: PropTypes.array.isRequired,
};

export default DayList;
