import React from 'react';
import { Button } from 'antd';
import './App.css';

function callServer() {
  var request = require('request');
  request('http://localhost:8000/', function (error, response, body) {});
}

function App() {
  return (
    <div className='App'>
      <Button type="primary" onClick={callServer}>Call the server!</Button>
    </div>
  );
}

export default App;
