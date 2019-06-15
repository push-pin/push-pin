import React from 'react';
import WeekAtGlance from '../containers/student/dashboard/WeekAtGlance';
import Announcements from '../containers/student/dashboard/AnnouncementsContainer';
import DashboardRecentlyUpdated from '../containers/student/dashboard/RecentlyUpdated';

function Student() {
  return (
    <section style={{ display: 'flex' }}>
      <Announcements />
      <DashboardRecentlyUpdated />
      <WeekAtGlance />
    </section>
  );
}


export default Student;
