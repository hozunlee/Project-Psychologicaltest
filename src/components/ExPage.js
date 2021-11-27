// import { Link } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import axios from 'axios';
import styled from "styled-components";

//TODO Home 에서 넘겨온 input을 questionPage로 넘겨보기


const ExPage = ( { history, location, useParams } ) => {
    const inputs = location.state.inputs;
    const [exData, setExData] = useState([]);
    const [now, setNow] = useState(0);
    console.log(inputs)


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
    
    const onDateAdd = (e) => {
            return setNow(now + 100)
    }


    return (
        <div>
            
            <h1 className='resultName'> <b>{inputs.name}님 반가워요.</b><br/>검사를 시작해봅시다.</h1>
            <br/>
            <h1>검사 예시</h1>
            <div>
                <p>{now}%</p>
                <ProgressBar now={now}  />
                
            </div>
            <br/>
            <p> 직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.<br/>
                가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.
            </p>
            <Testbox className='testSheet'>
            <h6 className="Qname"> Q{exData.qitemNo}. {exData.question}</h6>
                <input type="radio" name="answer" value="answer" id="one"
                onChange={onDateAdd}>

                </input>
                <label for="one">{exData.answer01}</label>
                <p>{exData.answer03}</p>
                <input type="radio" name="answer" value="answer" id="two"
                onChange={onDateAdd}>
                </input>
                <label for="two">{exData.answer02}</label>
                <p>{exData.answer04}</p>
            </Testbox>
            <br/>

            <AnyButton onClick={ () => {history.goBack()} }> 뒤로 버튼 </AnyButton>
            <AnyButton2 
            onClick={ (event) => {
                history.push({
                    pathname: `/QuestionPage`,
                    state: {inputs: inputs}
                    
                })
                }}
                disabled={!now}
                
                > 시작하기 </AnyButton2>
                
        </div>
    );
}

const AnyButton = styled.button `
    text-align: center;
    border: 0;
    border-radius: 30px;
    width: 30vw;
    background: #264653;
    color: #fff;
    font-size: 30px;
    display: inline-block;
    margin : auto;
    justify-content: center;
    float:left;
`;

const AnyButton2 = styled.button `
    text-align: center;
    border: 0;
    border-radius: 30px;
    width: 30vw;
    background: #264653;
    color: #fff;
    font-size: 30px;
    float:right; 
    display:inline-block;
    margin : auto;
    justify-content: center;
    `;

const Testbox = styled.div`
    margin : auto;
    display: block;
    background: #f4a261;
    width: 80%;
    height: 50%;
    padding: 20px 25px;
    border-radius: 20px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.13);
`;

export default ExPage;