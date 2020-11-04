// import request from 'request';
import React from 'react';
import { Button } from 'antd';
import './App.css';
import MentorshipForm from './components/MentorshipForm';



function callServer() {
  // const request = require('request');
  // request('http://localhost:8000/', (error, response, body) => {});
}

function App() {
  return (
    <div className="App">
      <Button type="primary" onClick={callServer}>
        Call the server!
      </Button>
      <MentorshipForm />
    </div>
  );
}

export default App;
