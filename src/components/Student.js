import React from 'react';
import WeekAtGlance from '../containers/student/dashboard/WeekAtGlance';
import Announcements from '../containers/student/dashboard/AnnouncementsContainer';

function Student() {
  return (
    <section style={{ display: 'flex' }}>
      <Announcements />
      <WeekAtGlance />
    </section>
  );
}


export default Student;
