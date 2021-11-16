import React from 'react';

const ResultPage = ( {history} ) => {
    return (
        
        <div>
            <button onClick={ () => {history.goBack()} }> 뒤로 버튼 </button>
            끝났습니다.
            <button onClick={ (event) => {
                alert('완료');
                history.push("/")}}> 처음으로 </button>
        </div>
    );
};

export default ResultPage;