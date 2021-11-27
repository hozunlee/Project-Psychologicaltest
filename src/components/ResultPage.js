import React from 'react';
import styled from 'styled-components';
import './css/ResultPage.css'


const ResultPage = ({history, location, useParams}) => {
    const inputs = location.state.inputs;
    const answers = location.state.answers;
    
    return (

        <div>
            <h1 className='resultName'> {inputs.name}님 검사가 완료되었습니다.</h1>
            <Resultbox>
                검사결과는 <b>{inputs.name}</b>님이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고,
                <br/>
                중요 가치를 충족시켜줄 수 있는 <b>직업에 대해 생각해 볼 기회</b>를 제공합니다.
            

            <br/>
            <br/>
            <AnyButton
                onClick={(event) => {
                    
                    history.push({
                        pathname: `/ReportPage`,
                        state: {inputs: inputs,
                            answers:answers}})
                }}>
                결과보기
            </AnyButton>
            </Resultbox>
        </div>
    );
};

const AnyButton = styled.button `
    text-align: center;
    border: 0;
    border-radius: 30px;
    width: 30vw;
    background: #9d4edd;
    color: #fff;
    font-size: 30px;
    display: inline-block;
    margin : auto;
    justify-content: center;
    

`;
const Resultbox = styled.div `
    margin : auto;
    display: block;
    background: #f6bd60;
    width: 80%;
    height: 10%;
    padding: 20px 25px;
    border-radius: 20px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.13);
`;
export default ResultPage;