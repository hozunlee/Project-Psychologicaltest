import React from 'react';

const QuestionPage = ( { history } ) => {

    return (
        <div>
            <h1>당신은 퐁퐁단이 맞습니다</h1>
            <h3> 양든퐁퐁😆 </h3>
            <button onClick={ () => {history.goBack()} }> 뒤로 버튼 </button>
        </div>
    );
}

export default QuestionPage;