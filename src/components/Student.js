import React from 'react';
import WeekAtGlance from '../containers/student/dashboard/WeekAtGlance';
import Announcements from '../containers/student/dashboard/AnnouncementsContainer';
import DashboardRecentlyUpdated from '../containers/student/dashboard/RecentlyUpdated';
import ReadingSubmission from '../containers/student/detail/reading/unsubmitted/ReadingSubmission';
import {
  DashboardContainer,
  AnnouncementsContainer,
  WeekAtGlanceContainer
} from '../../styles/layout/DashboardContainer';

function Student() {
  return (

    <DashboardContainer>
      <ReadingSubmission />
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
