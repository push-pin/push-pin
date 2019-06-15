import React from 'react';
import InstWeekAtGlance from '../containers/instructor/InstWeekAtGlance';


function Teacher() {

  return (
    <section style={{ display: 'flex' }}>
      {/* <Announcements />
      <DashboardRecentlyUpdated /> */}
      <InstWeekAtGlance />
    </section>
  );
}


export default Teacher;
