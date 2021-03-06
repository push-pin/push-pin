import React from 'react';
import InstWeekAtGlance from '../containers/instructor/dashboard/InstWeekAtGlance';
import RecentSubmissionContainer from '../containers/instructor/dashboard/RecentSubmissions';
import DashboardAnnouncements from '../containers/student/dashboard/AnnouncementsContainer';
import MakeAssignment from '../containers/teacher/MakeAssignment';

import {
  DashboardContainer,
  AnnouncementsContainer,
  WeekAtGlanceContainer
} from '../../styles/layout/DashboardContainer';

function Teacher() {
  return (
    <DashboardContainer>
      <MakeAssignment />
      <AnnouncementsContainer>
        <DashboardAnnouncements  />
        <RecentSubmissionContainer />
      </AnnouncementsContainer>

      <WeekAtGlanceContainer>
        <InstWeekAtGlance />
      </WeekAtGlanceContainer>
    </DashboardContainer>
  );
}

export default Teacher;
