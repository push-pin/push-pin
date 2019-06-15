import React from 'react';
import WeekAtGlance from '../containers/student/dashboard/WeekAtGlance';
import Announcements from '../containers/student/dashboard/AnnouncementsContainer';
import DashboardRecentlyUpdated from '../containers/student/dashboard/RecentlyUpdated';
import {
  DashboardContainer,
  UpdatesContainer,
  AnnouncementsContainer,
  WeekAtGlanceContainer
} from '../../styles/layout/DashboardContainer';

function Student() {
  return (
    <DashboardContainer>
      <UpdatesContainer>
        <AnnouncementsContainer>
          <Announcements />
        </AnnouncementsContainer>
        <AnnouncementsContainer>
          <DashboardRecentlyUpdated />
        </AnnouncementsContainer>
      </UpdatesContainer>
      <WeekAtGlanceContainer>
        <WeekAtGlance />
      </WeekAtGlanceContainer>
    </DashboardContainer>
  );
}


export default Student;
