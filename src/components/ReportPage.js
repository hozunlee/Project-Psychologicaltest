import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';

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


    useEffect(() => {
        console.log("loading");
        async function loadReport() {
            let seq = "";
            try {
                const response = await axios.post(
                    `http://www.career.go.kr/inspct/openapi/test/report?apikey=ca68cf13d92ce0d85b612e6e18c57e33&qestrnSeq=6`, users
                );
                seq = response.data.RESULT['url'].split("seq=")[1];
                console.log('POST 불러오기 성공');
            } catch (e) {
                console.log('POST 요청에서 에러 발생');
            }

        }
        loadReport();
    }, []); //2번째 array를 비워두면 한번만 실행하라는 뜻

    //post 의 URL 값 
    //url: "https://www.career.go.kr/inspct/web/psycho/value/report?seq=NTU1NTEyNjc"



    return (
        <div>
            {users.name}
            {users.gender}
            {users.answers}


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
