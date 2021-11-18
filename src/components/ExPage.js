import React, {useState, useEffect} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'





const ExPage = ( { history, now } ) => {
    
    

    return (
        <div>
            <button onClick={ () => {history.goBack()} }> 뒤로 버튼 </button>
            <h1>검사 예시</h1>
            <div>
                <p>{now}%</p>
                <ProgressBar now={now} label={`${now}%`} />
                
            </div>
            <br/>
            <p> 직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.<br/>
                가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.
            </p>
            <form>
                
            </form>

            <br/>
            <button onClick={ (event) => {
                alert('완료');
                history.push("/QuestionPage")}}> 결과보기 </button>
        </div>
        
    );
}

export default ExPage;