import React from 'react';
import './App.css';
import reactDom from 'react-dom';

import Home from './components/Home';
import QuestionPage from './components/QuestionPage';
import ResultPage from './components/ResultPage';
import ExPage from './components/ExPage';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TestSheet } from './components/TestSheet';

function App() {


  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/ExPage" component={ExPage} />
        <Route path="/QuestionPage" component={QuestionPage} />
        <Route path="/ResultPage" component={ResultPage} />
        <Route path="/Test" component={TestSheet} />
      </Router>
      
    </div>
  );
}

export default App;
