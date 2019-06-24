import React from 'react';
import WeekAtGlance from '../containers/student/dashboard/WeekAtGlance';
import Announcements from '../containers/student/dashboard/AnnouncementsContainer';
import DashboardRecentlyUpdated from '../containers/student/dashboard/RecentlyUpdated';
import {
  DashboardContainer,
  AnnouncementsContainer,
  WeekAtGlanceContainer
} from '../../styles/layout/DashboardContainer';

function Student() {
  return (

    <DashboardContainer>
      <AnnouncementsContainer>
        <Announcements />
        <DashboardRecentlyUpdated />
      </AnnouncementsContainer>


      <WeekAtGlanceContainer>
        <WeekAtGlance />
      </WeekAtGlanceContainer>
    </DashboardContainer>

  );
}

export default Student;
