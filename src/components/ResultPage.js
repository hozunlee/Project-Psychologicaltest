import React from 'react';
import styled from 'styled-components';
const { Link } = require("react-router-dom");

const ResultPage = ({history, location, useParams}) => {
    const inputs = location.state.inputs;
    const answers = location.state.answers;
    
    return (

        <div>
            <h1 className='resultName'> {inputs.name}님 검사가 완료되었습니다.<b>{inputs.gender}</b></h1>
            <h4>
                검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고,
                <br/>
                중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
            </h4>

            <button
                onClick={() => {
                    history.goBack()
                }}>
                뒤로 버튼
            </button>
            끝났습니다.
            <button
                onClick={(event) => {
                    alert('완료');
                    history.push({
                        pathname: `/ReportPage`,
                        state: {inputs: inputs,
                            answers:answers}})
                }}>
                결과보기
            </button>
        </div>
    );
};

export default ResultPage;