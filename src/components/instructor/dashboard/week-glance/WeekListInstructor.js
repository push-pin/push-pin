import React from 'react';
import PropTypes from 'prop-types';
import DayListInstructor from './DayListInstructor';
import { ListItemHeaderWeek } from '../../../../../styles/components/ListItemHeader';
import { DayContainer, WeekAtGlanceListContainer } from '../../../../../styles/layout/DashboardContainer';

function WeekListInstructor({ assignments }) {
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
            <DayListInstructor dayArray={assignments.Mon} />
          </div>
        </DayContainer>

        <DayContainer>
          <div className="day-stripe">
            <h3>Tuesday</h3>
          </div>
          <div>
            <DayListInstructor dayArray={assignments.Tues} />
          </div>
        </DayContainer>

        <DayContainer>
          <div className="day-stripe">
            <h3>Wednesday</h3>
          </div>
          <div>
            <DayListInstructor dayArray={assignments.Wed} />
          </div>
        </DayContainer>

        <DayContainer>
          <div className="day-stripe">
            <h3>Thursday</h3>
          </div>
          <div>
            <DayListInstructor dayArray={assignments.Thurs} />
          </div>
        </DayContainer>

        <DayContainer>
          <div>
            <h3>Friday</h3>
          </div>
          <div>
            <DayListInstructor dayArray={assignments.Fri} />
          </div>
        </DayContainer>

      </WeekAtGlanceListContainer>

    </>
  );
}

WeekListInstructor.propTypes = {
  assignments: PropTypes.object.isRequired
};

export default WeekListInstructor;
