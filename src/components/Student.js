import React from 'react';
import WeekAtGlance from '../containers/student/dashboard/WeekAtGlance';
import Announcements from '../containers/student/dashboard/AnnouncementsContainer';

function Student() {
  return (
    <section>
      <Announcements />
      <WeekAtGlance />
    </section>
  );
}


export default Student;
