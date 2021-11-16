<<<<<<< HEAD
import React from 'react';
import {useState} from 'react';
import './App.css';
import reactDom from 'react-dom';

import Home from './components/Home';
import QuestionPage from './components/QuestionPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';


=======
import logo from './logo.svg';
import './App.css';
>>>>>>> 35c9485b90bcf2ee2e739fb0efd9b42e47c0bdf6

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/QuestionPage" component={QuestionPage} />
      </Router>
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 35c9485b90bcf2ee2e739fb0efd9b42e47c0bdf6
    </div>
  );
}

export default App;
