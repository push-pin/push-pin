import React from 'react';
import PropTypes from 'prop-types';
import DayList from './DayList';

function WeekList({ assignments }) {
  //assignments is an object that has been formatted by the getWeekAtGlance service to have key of day and value of an array of assignments related to that day
  // { 
  //   dates: ['5/25', '5/26', '5/27', '5/28', '5/29'],
  //   monday: [{assign}, {assign}, {assign}],
  //   tuesday: [{assign}, {assign}, {assign}]
  // }
  // this object will always be structured the same way - week at a glance will always be M-F for the week you're in. The service will need a way of accessing current date as well as day of the week to return the correct info. 

  return (
    <div>
      <div>
        <h2>Week At A Glance</h2>
      </div>
      <div>
        <div>
          <header>
            <h3>Monday</h3>
            <h4>{assignments.dates[0]}</h4>
          </header>
          <div>
            <DayList dayArray={assignments.monday} />
          </div>
        </div>

        <div>
          <header>
            <h3>Tuesday</h3>
            <h4>{assignments.dates[1]}</h4>
          </header>
          <div>
            <DayList dayArray={assignments.tuesday} />
          </div>
        </div>

        <div>
          <header>
            <h3>Wednesday</h3>
            <h4>{assignments.dates[2]}</h4>
          </header>
          <div>
            <DayList dayArray={assignments.wednesday} />
          </div>
        </div>

        <div>
          <header>
            <h3>Thursday</h3>
            <h4>{assignments.dates[3]}</h4>
          </header>
          <div>
            <DayList dayArray={assignments.thursday} />
          </div>
        </div>

        <div>
          <header>
            <h3>Friday</h3>
            <h4>{assignments.dates[4]}</h4>
          </header>
          <div>
            <DayList dayArray={assignments.friday} />
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
