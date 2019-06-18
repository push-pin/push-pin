import React from 'react';
import InstWeekAtGlance from '../containers/instructor/dashboard/InstWeekAtGlance';
import RecentSubmissionContainer from '../containers/instructor/dashboard/RecentSubmissions';
import InstAnnouncementsContainer from '../containers/instructor/dashboard/InstAnnouncements';


function Teacher() {

  return (
    <section style={{ display: 'flex' }}>
      <InstAnnouncementsContainer  />
      <RecentSubmissionContainer />
      <InstWeekAtGlance />
    </section>
  );
}


export default Teacher;
