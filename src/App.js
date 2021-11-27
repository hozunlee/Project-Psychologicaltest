import React from 'react';
import './App.css';



import Home from './components/Home';
import QuestionPage from './components/QuestionPage';
import ResultPage from './components/ResultPage';
import ExPage from './components/ExPage';
import ReportPage from './components/ReportPage';

// import chartPage from './components/chart';



import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChartCC from './components/chart';


function App() {


  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/ExPage/:name" render={(props) => <ExPage  {...props} />} />
        <Route path="/QuestionPage" render={(props) => <QuestionPage {...props} />} />
        <Route path="/ResultPage/" component={ResultPage} />
        <Route path="/ReportPage" component={ReportPage} />
        <Route path="/chart" component={ChartCC} />
      </Router>

    </div>//
  );
}

export default App;



