import React, {useState, useEffect} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components';
import axios from 'axios';
import _ from "lodash"


const QuestionPage = ({history, location, useParams }) => {
    const inputs = location.state.inputs;
    const [getData, setGetData] = useState([]);
    const [now, setNow] = useState(0);
    const [btnDisable, setBtnDisable] = useState(true); //true 값이어야함!
    //setCountPer(parseInt( (100 * Object.keys(inputs).length) / saveData.length ));

    // console.log(Object.keys(saveData).length) console.log(btnDisable)  5개 클릭시 버튼
    // 활성화 확인

    useEffect(() => {
        console.log("loading");
        async function loadQuestion() {
            try {
                const response = await axios.get(
                    `https://www.career.go.kr/inspct/openapi/test/questions?apikey=ca68cf13d92ce0d85b612e6e18c57e33&q=6`
                );

                setGetData(response.data.RESULT);

            } catch (e) {
                console.log('Error');
            }

        }
        loadQuestion();
    }, []); //2번째 array를 비워두면 한번만 실행하라는 뜻


    const inputsInitial = {}
    for (let i = 1; i < getData.length+1; i++){
        inputsInitial[`B${i}`] = "";
    }


    
    // 선택한 input 값 받아서 저장
    const [saveData, setSaveData] = useState(inputsInitial);

    // TODO QuestionPage.js에 state를 하나 더 만들고, 그 state에 답변 28개가 꽉 차면 history.push할 때
    // params로 결과지를 같이 넘기면 됩니다.
    console.log(inputs)
    console.log(saveData)
    

    const onDateAdd = (e) => {
        let keyname = e.target.name;
        const {value, name} = e.target;


        setSaveData((cur) => {
            let newsetSaveData = {...cur};
            newsetSaveData[name]= value;
            return newsetSaveData;
        });
        

        if (Object.keys(saveData).length === 27) {
            return (setNow(100), setBtnDisable(false))
        } else {
            return;
        }
    }

    const inputsForPost = []
    var answers = []
    
    

    useEffect(() => {
        if (Object.keys(saveData).length === getData.length){
            console.log("Post 유즈이펙트 작동확인");
            for (let input of Object.entries(saveData)){
            inputsForPost.push(input.join("="));
            console.log(inputsForPost)
            answers = inputsForPost.join(" ");
            console.log(answers)
            }
        }
        }, [saveData]);
    console.log(answers)

    // pagination 입니다.
    const [pageNumber, setPageNumber] = useState(0)

    const DatasPerPage = 5
    const pageVisited = pageNumber * DatasPerPage

    const displayData = getData
        .slice(pageVisited, pageVisited + DatasPerPage)
        .map((item, idx) => {
            return (
                <div>
                    <Testbox>
                        <h6 key={item.qitemNo}>
                            Q{item.qitemNo}. {item.question}</h6>
                            
                        <form>

                            <label for='answer'>
                                <input
                                    type="radio"
                                    name={item.qitemNo}
                                    value={item.answerScore01}
                                    checked={saveData[String(item.qitemNo)] === item.answerScore01 ? true : false }
                                    onChange={onDateAdd}
                                    ></input>
                                {item.answer01}</label>

                            <label for={item.answer02}>
                                <input
                                    type="radio"
                                    name={item.qitemNo}
                                    value={item.answerScore02}
                                    checked={saveData[String(item.qitemNo)] === item.answerScore02 ? true : false }
                                    onChange={onDateAdd}
                                    ></input>
                                {item.answer02}</label>
                            
                            
                            

                        </form>
                    </Testbox>
                    <br/>
                </div> //TODO input에 클릭한 버튼이 saveData 에 저장되는지 확인!
            )
        });

    const pageCount = Math.ceil(getData.length / DatasPerPage); //ceil는 반올림

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };
    console.log("pagenumber ::" + pageNumber)

    return (
        <div>
            <h1 className='resultName'> {inputs.name}님 검사를 시작합니다.<b>{inputs.gender}</b></h1>
            <h1>검사 진행</h1>
            <div>
                <p>{now}%</p>
                <ProgressBar now={now} label={`${now}%`}/>

            </div>
            <br/>
            <h4>
                직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.<br/>
                가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.
            </h4>
            <div>
                {displayData}
                <ReactPaginate 
                previousLabel={<AnyButton
                    onClick = {
                        (event) => {
                            setNow(now - 18)

                            if (now === 0) {
                                history.goBack()
                            } else {
                                return;
                            }

                        }
                    } > Previous</AnyButton>} 
                nextLabel={<AnyButton
                    disabled={btnDisable && Object.keys(saveData).length % 5 !== 0 || pageNumber * 5 == Object.keys(saveData).length} //FIXME 저 그래서 현재페이지 5의 배수로(0~25) 준 다음에 현재 페이지값 == 객체 길이인 경우에도 Disabled 줬어요!!
                    onClick = {
                        (event) => {
                            event.preventDefault();

                            if (now === 100) {
                                history.push({
                                    pathname: `/ResultPage/:name`,
                                    state: {inputs: inputs,
                                        answers:answers}
                                })
                            } else {
                                setNow(now + 18)
                            }

                        }
                    } > Next</AnyButton>} pageClassName="numbering"
                    //TODO CSS값 적용하기
                pageCount={pageCount}
                    //TODO 숫자 나오는 부분을 css로 display:none 해줘야함
                onPageChange={changePage}
                containerClassName="pagination"
                renderOnZeroPageCount={null}

                />

            </div>
            <br/>
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
    margin-left : 50%;
`;

const Testbox = styled.div `
background-color: ${props => props.color || "#f4a261"};
    width: 80%;
    height: 50%;
    border-radius: 3px;
    border : 3px;
    display: block;
    margin : auto;
    font-color : white;
`;

const Radiobox = styled.form `
`;

export default QuestionPage;
