import React from 'react';

const QuestionPage = ( { history } ) => {

    return (
        <div>
            <button onClick={ () => {history.goBack()} }> 뒤로 버튼 </button>
            <h1>검사예시</h1>
            <h3> 직업과 관련된 블라블라 </h3>
            <button onClick={ (event) => {
                alert('완료');
                history.push("/ResultPage")}}> 결과보기 </button>
        </div>
        
    );
}

export default QuestionPage;