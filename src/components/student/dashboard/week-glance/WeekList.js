import React from 'react';
import PropTypes from 'prop-types';
import DayList from './DayList';

function WeekList({ assignments }) {
  //figure out how to display date as part of header
  console.log('assignments', assignments);
  return (
    <div>
      <div>
        <h2>Week At A Glance</h2>
      </div>
      <div>
        
        <div>
          <h3>Monday</h3>
          <div>
            <DayList dayArray={assignments.Mon} />
          </div>
        </div>

        <div>
          <h3>Tuesday</h3>
          <div>
            <DayList dayArray={assignments.Tues} />
          </div>
        </div>

        <div>
          <h3>Wednesday</h3>
          <div>
            <DayList dayArray={assignments.Wed} />
          </div>
        </div>

        <div>
          <h3>Thursday</h3>
          <div>
            <DayList dayArray={assignments.Thurs} />
          </div>
        </div>

        <div>
          <h3>Friday</h3>
          <div>
            <DayList dayArray={assignments.Fri} />
          </div>
        </div>

      </div>
    </div>
  );
}

WeekList.propTypes = {
  assignments: PropTypes.object.isRequired
};

export default WeekList;
