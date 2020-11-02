// import request from 'request';
import React from 'react';
import logo from './logo.svg';
import './App.css';

function callServer() {
  // const request = require('request');
  // request('http://localhost:8000/', (error, response, body) => {});
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <button onClick={callServer} type="submit">
          Call the server!
        </button>
        <button onClick={callServer} type="submit">
          Some trial change
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
