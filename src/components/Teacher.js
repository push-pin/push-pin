import React from 'react';
import InstWeekAtGlance from '../containers/instructor/dashboard/InstWeekAtGlance';
import RecentSubmissionContainer from '../containers/instructor/dashboard/RecentSubmissions';
import InstAnnouncementsContainer from '../containers/instructor/dashboard/InstAnnouncements';

import {
  DashboardContainer,
  AnnouncementsContainer,
  WeekAtGlanceContainer
} from '../../styles/layout/DashboardContainer';

function Teacher() {
  return (
    <DashboardContainer>
      <AnnouncementsContainer>
        <InstAnnouncementsContainer  />
        <RecentSubmissionContainer />
      </AnnouncementsContainer>

      <WeekAtGlanceContainer>
        <InstWeekAtGlance />
      </WeekAtGlanceContainer>
    </DashboardContainer>
  );
}


export default Teacher;
