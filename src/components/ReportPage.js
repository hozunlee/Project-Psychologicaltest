import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import ChartCC from './chart';

const ReportPage = ({history, location, useParams }) => {
    const inputs = location.state.inputs;
    const answers = location.state.answers;
    
    const {name, gender} = inputs
    var users = {
        "apikey" : "ca68cf13d92ce0d85b612e6e18c57e33",
        "qestrnSeq" : "6",
        "trgetSe" : "100209",
        "name": "홍길동",
        "gender": "100323",
        "school": "",
        "grade": "",
        "email": "",
        "startDtm": 1550466291034,
        "answers": "B1=2 B2=4 B3=6 B4=8 B5=10 B6=11 B7=14 B8=15 B9=17 B10=19 B11=21 B12=23 B13=26 B14=28 B15=29 B16=31 B17=34 B18=35 B19=38 B20=40 B21=41 B22=43 B23=45 B24=47 B25=50 B27=54 B26=51 B28=56"
}

    users.name = name
    users.gender = gender
    users.answers = answers

    
    //api를 통해 결과 값 가져오기 
    const [realData, setRealData] = useState({})

    useEffect(() => {
        console.log("loading");
        async function loads() {
            let seq = "";
            async function loadResult(){
                try {
                    const response = await axios.post(
                        `http://www.career.go.kr/inspct/openapi/test/report?apikey=ca68cf13d92ce0d85b612e6e18c57e33&qestrnSeq=6`, users
                    );
                    seq = response.data.RESULT['url'].split("seq=")[1];
                    console.log('POST 불러오기 성공');
                    console.log(seq)
                } catch (e) {
                    console.log('POST 요청에서 에러 발생');
                }

        }
            async function loadJsonData(){
                try {
                    const response2 = await axios.get(`https://www.career.go.kr/inspct/api/psycho/report?seq=${seq}`);
                    setRealData(response2['data'])
                    console.log('리얼데이터 불러오기 성공');
                    
                } catch (error) {
                    console.log("리얼데이터 GET요청에서 에러 발생")
                }
        }
        await loadResult();
        await loadJsonData();
        console.log(realData)
        }
        loads();
    }, [ ]) //2번째 array를 비워두면 한번만 실행하라는 뜻

    //post 의 URL 값 
    //url: "https://www.career.go.kr/inspct/web/psycho/value/report?seq=NTU1NTEyNjc"

    //결과 값 가공해서 차트만들기
    const reportScores = useMemo(() => {
        if (realData?.result?.wonScore) {
            const scores = (realData.result.wonScore + "")
            .split(" ")
            .filter((value) => {
                return !!value;
            })
            .map((value) => {
                const [seq, score] = value
                    .split("=")
                    .map((text) => parseInt(text, 10));
                return { seq, score };
            });
        return scores;
        
        }
        return [];
    }, [realData]);



    return (
        <div>
            <div>
                <h1>직업가치관검사 결과표</h1>
                <p>
                    직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과 신념입니다.
                    따라서 여러분의 직업생활과 관련하여 포기하지 않는 무게중심의 역할을 한다고
                    볼 수 있습니다. 직업가치관검사는 여러분이 직업을 선택할 때 상대적으로 어떠한
                    가치를 중요하게 생각하는지를 알려줍니다. 또한 본인이 가장 중요하게 생각하는
                    가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
                </p>
                {realData && Object.keys(realData).length > 0 ? (
                    <>
                    <table border="1">
                        <th>이름</th>
                        <th>성별</th>
                        <th>검사일</th>
                        <tr>
                        <td>{name}</td>
                        <td>{gender === "100323" ? "남" : "여"}</td>
                        <td>{realData.result["endDtm"].slice(0, 10).split("-").join(".")}</td>
                        </tr>
                    </table>
                    </>
                ) : undefined}
                <h2>직업가치관 결과</h2>
                <ChartCC data={reportScores} name={name} ></ChartCC>
                <h2>가치관과 관련이 높은 직업</h2>

                </div>;


            <button
                onClick={(event) => {
                    alert('완료');
                    history.push("/")
                }}>
                처음으로
            </button>
        </div>
    );
};

export default ReportPage;
