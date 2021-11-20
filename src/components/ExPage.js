// import { Link } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";



const ExPage = ( { history } ) => {
    const [exData, setExData] = useState([]);
    const [now1, setNow1] = useState(0);



    useEffect(() => {
        console.log("loading");
        async function loadQuestion() {
        try {
            const response = await axios.get(`https://www.career.go.kr/inspct/openapi/test/questions?apikey=ca68cf13d92ce0d85b612e6e18c57e33&q=6`);
    
            setExData(response.data.RESULT[0]);
            
        } catch (e) {
            console.log('Error');
        }
    
        } loadQuestion();
      }, []); //2번째 array를 비워두면 한번만 실행하라는 뜻
    console.log(exData);
    

    return (
        <div>
            <button onClick={ () => {history.goBack()} }> 뒤로 버튼 </button>
            <h1>검사 예시</h1>
            <div>
                <p>{now1}%</p>
                <ProgressBar now={now1} label={`${now1}%`} />
                
            </div>
            <br/>
            <p> 직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.<br/>
                가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.
            </p>
            <Testbox className='testSheet'>
            <h6> Q{exData.qitemNo}. {exData.question}</h6>
                <input type="radio" name="answer" value="answer"></input>
                <label for="answer">{exData.answer01}</label>
                <p>{exData.answer03}</p>
                <input type="radio" name="answer" value="answer"></input>
                <label for="answer">{exData.answer02}</label>
                <p>{exData.answer04}</p>
            </Testbox>
            <br/>
            <AnyButton 
            onClick={ (event) => {
                alert('완료');
                history.push("/QuestionPage")}}
                disabled={!exData}
                
                > 시작하기 </AnyButton>
        </div>
        
    );
}

const AnyButton = styled.button`
    text-align: center;
    border: 0;
    border-radius: 30px;
    width: 30vw;
    background: skyblue;
    color: #fff;
    font-size: 50px;
`;

const Testbox = styled.div`
background-color: ${props => props.color || "palevioletred"};
    width: 50%;
    height: 50%;
    border-radius: 3px;
    border : 3px;
    display: block;
    margin : auto;
`;

export default ExPage;