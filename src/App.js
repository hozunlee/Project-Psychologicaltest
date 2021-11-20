import React from 'react';
import './App.css';
import reactDom from 'react-dom';
import { useState, useEffect } from 'react';


import Home from './components/Home';
import QuestionPage from './components/QuestionPage';
import ResultPage from './components/ResultPage';
import ExPage from './components/ExPage';
import Tesss from './components/Tesss';


import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/ExPage" render={(props) => <ExPage  {...props} />} />
        <Route path="/QuestionPage" render={(props) => <QuestionPage {...props} />} />
        <Route path="/ResultPage/:name" component={ResultPage} />
        <Route path="/Test" render={(props) => <Tesss  {...props} />}/>
        
      </Router>
      
    </div>//
  );
}

export default App;



