import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function TestSheet() {
  const [saveData, setSaveData] = useState([]);

  useEffect(() => {
    console.log("loading");
    async function loadQuestion() {
      try {
        const response = await axios.get(`https://www.career.go.kr/inspct/openapi/test/questions?apikey=ca68cf13d92ce0d85b612e6e18c57e33&q=6`);

        setSaveData(response.data.RESULT);
        console.log(saveData);
      } catch (e) {
        console.log('에러 발생');
      }

    } loadQuestion();
  }, []); //2번째 array를 비워두면 한번만 실행하라는 뜻

  const questions = saveData.map((item, idx) => {
    return (
      <>
        <h3>{item.qitemNo}. {item.question}</h3>
        <form>

        </form>
      </>);
  });


  return (
    <div>
      <p>{questions}</p>

    </div>
  );
}
