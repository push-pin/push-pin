import React from 'react';
import InstWeekAtGlance from '../containers/instructor/dashboard/InstWeekAtGlance';
import RecentSubmissionContainer from '../containers/instructor/dashboard/RecentSubmissions';
import InstAnnouncementsContainer from '../containers/instructor/dashboard/InstAnnouncements';

import {
  DashboardContainer

} from '../../styles/layout/DashboardContainer';

function Teacher() {
  return (
    <DashboardContainer>
      <InstAnnouncementsContainer  />
      <RecentSubmissionContainer />
      <InstWeekAtGlance />
    </DashboardContainer>
  );
}


export default Teacher;
