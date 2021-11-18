import React from 'react';
import './App.css';
import reactDom from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Home from './components/Home';
import QuestionPage from './components/QuestionPage';
import ResultPage from './components/ResultPage';
import ExPage from './components/ExPage';
import Tesss from './components/Tesss';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// // src = https://www.career.go.kr/inspct/openapi/test/questions?apikey=ca68cf13d92ce0d85b612e6e18c57e33&q=6

function App() {
  const [getData, setGetData] = useState([]);
  const [now, setNow] = useState(10);

  useEffect(() => {
    console.log("loading");
    async function loadQuestion() {
      try {
        const response = await axios.get(`https://www.career.go.kr/inspct/openapi/test/questions?apikey=ca68cf13d92ce0d85b612e6e18c57e33&q=6`);

        setGetData(response.data.RESULT);
        
      } catch (e) {
        console.log('Error');
      }

    } loadQuestion();
  }, []); //2번째 array를 비워두면 한번만 실행하라는 뜻
  console.log(getData);

  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} now={now} />
        <Route path="/ExPage"render={(props) => <ExPage now={now} {...props} />} />
        <Route path="/QuestionPage" component={QuestionPage} />
        <Route path="/ResultPage" component={ResultPage} />
        <Route path="/Test">
          <Tesss getData={getData}></Tesss>
        </Route>
      </Router>
            
    </div>
  );
}

export default App;
