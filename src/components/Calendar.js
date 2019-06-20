import React from 'react';
import Iframe from 'react-iframe';

export default function Calendar() {
  return (
    <div style={{ width: '100%', marginLeft: '20em', marginTop: '10em' }}>
      <h1>PushPin Calendar</h1>
      <div style={{ width: '100vw' }}>
      <Iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=cHVzaHBpbmxtc0BnbWFpbC5jb20&amp;src=YWxjaGVteWNvZGVsYWIuY29tX21tcWNuMzk5ajZzbTJvczI5c2RkZzZ1czFvQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=cWowMnBkN3Exb203YnBwNTJycnA2bnIwbmdsbWZlcWJAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%23AD1457&amp;color=%23616161&amp;color=%230B8043" style="border-width:0" 
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
