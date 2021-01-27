I started implementing the availability feature using the google calendar API. Below is some of the code I wrote. This will be finished next week, as I push the full feature.

```javascript
import React from 'react';

var apiKey = "A secret I didn't forget to remove ;)"
var discoveryDocs = [
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
];
var clientId =
  "Another secret I didn't forget to remove ;)";
var scopes = 'calendar';

function Home() {
  return (
    <div>
      <button onClick={handleClientLoad}>onload</button>
      <button>Sign Out</button>
    </div>
  );

  function handleClientLoad() {
    // Load the API client and auth2 library
    gapi.load('client:auth2', initClient);
  }

  function initClient() {
    gapi.client
      .init({
        apiKey: apiKey,
        discoveryDocs: discoveryDocs,
        clientId: clientId,
        scope: scopes,
      })
      .then(function () {
        console.log(
          gapi.client.calendar.calendars.get({ calendarId: 'primary' }),
        );
      });
  }
}
export default Home;

```