import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components';
import axios from 'axios';

const QuestionPage = ( { history } ) => {
    const [getData, setGetData] = useState([]);
    const [now, setNow] = useState(0);

    useEffect(() => {
        console.log("loading");
        async function loadQuestion() {
        try {
            const response = await axios.get(`https://www.career.go.kr/inspct/openapi/test/questions?apikey=ca68cf13d92ce0d85b612e6e18c57e33&q=6`);
    
            setGetData(response.data.RESULT);
            
        } catch (e) {
            console.log('Error');
        }
    
        } loadQuestion();
      }, []); //2번째 array를 비워두면 한번만 실행하라는 뜻
    console.log(getData);


    const [pageNumber, setPageNumber] = useState(0)

    const DatasPerPage = 5
    const pageVisited = pageNumber * DatasPerPage


    const displayData = getData
        .slice(pageVisited, pageVisited + DatasPerPage)
        .map((item) => {
            return (
                <div className='testSheet'>
                    <h6 key={item.qitemNo}> Q{item.qitemNo}. {item.question}</h6>
                    <form>
                        <input type="radio" name="answer" value="answer"></input>
                        <label for="answer">{item.answer01}</label>
                        
                        <input type="radio" name="answer" value="answer"></input>
                        <label for="answer">{item.answer02}</label>
                        
                    </form>
                </div>
            )
        });

    const pageCount = Math.ceil(getData.length / DatasPerPage); //ceil는 반올림

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };



    return (
        <div>
            <button onClick={ () => {history.goBack()} }> 뒤로 버튼 </button>
            <h1>검사 예시</h1>
            <div>
                <p>{now}%</p>
                <ProgressBar now={now} label={`${now}%`} />
                
            </div>
            <br/>
            <h4> 직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.<br/>
                가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.
            </h4>
            <div>
                {displayData} 
                <ReactPaginate
                    previousLabel={<AnyButton>Previous</AnyButton>}
                    nextLabel={<AnyButton>Next</AnyButton>}
                    pageCount={pageCount} //TODO 숫자 나오는 부분을 css로 display:none 해줬어요!
                    onPageChange={changePage}
                    theme="square-fill"
                />
        
            </div>

            <br/>
            <button onClick={ (event) => {
                alert('완료');
                history.push("/ResultPage")}}> 결과보기 </button>
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

const Ulcount = styled.section`
    display: None;
`;

export default QuestionPage;
