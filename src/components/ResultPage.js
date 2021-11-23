import React from 'react';
const { useParams, Link } = require("react-router-dom");




const ResultPage = ( {history, location} ) => {
    const {name}: {name: string} = useParams();

    return (
        
        <div>
            <h1 className='resultName'>검사가 완료되었습니다 {name}님</h1>
            <button onClick={ () => {history.goBack()} }> 뒤로 버튼 </button>
            끝났습니다.
            <button onClick={ (event) => {
                alert('완료');
                history.push("/")}}> 처음으로 </button>
        </div>
    );
};

export default ResultPage;