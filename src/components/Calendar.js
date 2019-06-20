import React from 'react';
import Iframe from 'react-iframe';

export default function Calendar() {
  return (
    <div style={{ width: '100%', marginLeft: '20em', marginTop: '10em' }}>
      <h1>PushPin Calendar</h1>
      <div style={{ width: '100vw' }}>
        <Iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=cHVzaHBpbmxtc0BnbWFpbC5jb20&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%230B8043&amp;showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showTz=0"
          width="800" 
          height="600" 
          frameBorder="0" 
          scrolling="no"
        >
        </Iframe>
      </div>
    </div>
  );
}
