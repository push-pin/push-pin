import React from 'react';
import InstWeekAtGlance from '../containers/instructor/dashboard/InstWeekAtGlance';
import RecentSubmissionContainer from '../containers/instructor/dashboard/RecentSubmissions';


function Teacher() {

  return (
    <section style={{ display: 'flex' }}>
      {/* <Announcements /> */}
      <RecentSubmissionContainer />
      <InstWeekAtGlance />
    </section>
  );
}


export default Teacher;
