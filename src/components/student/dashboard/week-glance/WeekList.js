import React from 'react';
import PropTypes from 'prop-types';
import DayList from './DayList';
import { ListItemHeaderWeek } from '../../../../../styles/components/ListItemHeader';
import { WeekAtGlanceListContainer, DayContainer } from '../../../../../styles/layout/DashboardContainer';

function WeekList({ assignments }) {
  console.log('assignments in weeklist', assignments);
  //figure out how to display date as part of header
  return (
    <>
      <ListItemHeaderWeek>
        <h2>Week At A Glance</h2>
      </ListItemHeaderWeek>
        
    <WeekAtGlanceListContainer>
      <DayContainer>
        <div className="day-stripe">
          <h3>Monday</h3>
        </div>
        <div>
          {/* <DayList dayArray={assignments.tues} /> */}
        </div>
      </DayContainer>
      
{/* revert back to assignments.[dayofweek] instead of monday */}

      <DayContainer>
        <div className="day-stripe">
          <h3>Tuesday</h3>
        </div>
        <div>
          <DayList dayArray={assignments.tues} />
        </div>
      </DayContainer>

      <DayContainer>
        <div className="day-stripe">
          <h3>Wednesday</h3>
        </div>
        <div>
          {/* <DayList dayArray={assignments.tues} /> */}
        </div>
      </DayContainer>

      <DayContainer>
        <div className="day-stripe">
          <h3>Thursday</h3>
        </div>
        <div>
          {/* <DayList dayArray={assignments.tues} /> */}
        </div>
      </DayContainer>

      <DayContainer>
        <div className="day-stripe">
          <h3>Friday</h3>
        </div>
        <div>
          {/* <DayList dayArray={assignments.tues} /> */}
        </div>
      </DayContainer>

    </WeekAtGlanceListContainer>
    </>
  );
}

WeekList.propTypes = {
  assignments: PropTypes.object.isRequired
};

export default WeekList;
