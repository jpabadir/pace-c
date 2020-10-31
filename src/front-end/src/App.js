import './App.css';

function callServer() {
  var request = require('request');
  request('http://localhost:8000/', function (error, response, body) {});
}

function App() {
  return (
    <div className='App'>
      <button onClick={callServer}>Call the server!</button>
    </div>
  );
}

export default App;
