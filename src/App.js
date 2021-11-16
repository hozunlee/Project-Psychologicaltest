import React from 'react';
import {useState} from 'react';
import './App.css';
import reactDom from 'react-dom';
import Home from './components/Home';
import QuestionPage from './components/QuestionPage';
import ResultPage from './components/ResultPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/QuestionPage" component={QuestionPage} />
        <Route path="/ResultPage" component={ResultPage} />
      </Router>
    </div>
  );
}

export default App;
