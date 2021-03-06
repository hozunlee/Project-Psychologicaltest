import axios from 'axios';
import React, { useEffect, useState, useMemo, useCallback} from 'react';
import { useLocation } from "react-router-dom";
import ChartCC from './chart';
import styled from 'styled-components';


const ReportPage = ({history, location, useParams }) => {

    function ScrollToTop() {
        const { pathname } = useLocation();
        
            useEffect(() => {
            window.scrollTo(0, 0);
            }, [pathname]);
        
            return null;
        }

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
    const [majors, setMajors] = useState(null);
     const [jobs, setJobs] = useState(null);

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
    console.log(reportScores)

    //reportScores 정렬하기
    const sortedReportScores = useMemo(() => {
        if (Array.isArray(reportScores)) {
            return [...reportScores].sort((a, b) => {
                return a.score < b.score ? 1 : -1;
            });
            }
            return [];
            
        }, [reportScores]);
    console.log(sortedReportScores)
    

    const fetchMajors = useCallback(async () => {
        if (Array.isArray(sortedReportScores) && sortedReportScores.length > 2) {
            const [{ seq: no1 }, { seq: no2 }] = sortedReportScores;
            if (no1 && no2) {
                let majorUrl = `https://inspct.career.go.kr/inspct/api/psycho/value/majors?no1=${
                    no1
                }&no2=${no2}`;
                const response = await axios.get(majorUrl);
                ;
                if (response) {
                    setMajors(response.data);
                    console.log("major", response.data);
                }
            }
            }
        }, [sortedReportScores]);
    
        const fetchJobs = useCallback(async () => {
            if (Array.isArray(sortedReportScores) && sortedReportScores.length > 2) {
                const [{ seq: no1 }, { seq: no2 }] = sortedReportScores;
                if (no1 && no2) {
                    let jobUrl = `https://inspct.career.go.kr/inspct/api/psycho/value/jobs?no1=${
                        no1
                    }&no2=${no2}`;
                    const response = await axios.get(jobUrl);
                    if (response) {
                        setJobs(response.data);
                        console.log("jobs", response.data);

                    }
                }
                }
            }, [sortedReportScores]);
        



    useEffect(() => {
        fetchMajors();
    }, [fetchMajors]);

    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);
    
    
    const educationLevelNames = [
        "중졸이하",
        "고졸",
        "전문대졸",
        "대졸",
        "대학원졸",
    ];

    const majorNames = [
        "계열무관",
        "인문",
        "사회",
        "교육",
        "공학",
        "자연",
        "의학",
        "예체능",
    ];


    return (
        <div>
            <div>
                <ScrollToTop />
                <h1 className='resultName'>직업가치관검사 결과표</h1>
                <div>
                    <Resultbox>
                        직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과 신념입니다.
                        따라서 <b>{name}</b>님의 직업생활과 관련하여 포기하지 않는 무게중심의 역할을 한다고
                        볼 수 있습니다. <br/> <b>{name}</b>님이 직업을 선택할 때 상대적으로 어떠한
                        가치를 중요하게 생각하는지를 알려줍니다. <br/>또한 <b>{name}</b>님이 가장 중요하게 생각하는
                        가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
                    </Resultbox>
                    <br/>
                </div>
                {realData && Object.keys(realData).length > 0 ? (
                    <>
                    <StyledTable border="1">

                        <thead>
                            <th>이름</th>
                            <th>성별</th>
                            <th>검사일</th>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{name}</td>
                            <td>{gender === "100323" ? "남" : "여"}</td>
                            <td>{realData.result["endDtm"].slice(0, 10).split("-").join(".")}</td>
                            </tr>
                        </tbody>
                    </StyledTable>
                    </>
                ) : undefined}
                <ChartCC data={reportScores} name={name} ></ChartCC>
                </div>
                <br/>
                <br/>
                <div>
                <h3>가치관과 관련이 높은 직업</h3>
                    <div className="bg-secondary p-2 text-center text-white">
                    <h4>종사자 평균 학력별</h4>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col" style={{ whiteSpace: "nowrap", minWidth: 120 }}>
                                분야
                            </th>
                            <th scope="col">직업</th>
                            </tr>

                            {educationLevelNames.map(
                                (educationLevelName, educationLevelIndex) => {
                                    const jobsByEducationLevel = (jobs || []).filter((job) => {
                                        return job?.[2] === educationLevelIndex + 1;
                                    });

                            
                            return (
                                
                                <tr style={jobsByEducationLevel.length <= 0 ? { display: "none" } : {}}>
                                <td
                                    style={{
                                    whiteSpace: "nowrap",
                                    }}
                                >
                                    {educationLevelName}
                                </td>
                                <td>
                                    {jobsByEducationLevel.map((job) => {
                                    const [jobSeq, jobName] = job;
                                    return (
                                        
                                        <a
                                        className="mr-2"
                                        href={`https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${jobSeq}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        >
                                        {jobName}
                                        </a>
                                    );
                                    })}
                                </td>
                                </tr>
                            );
                            })}
                        </thead>
                        </table>;
                        <div className="bg-secondary p-2 text-center text-white">
                            <h4>종사자 평균 전공별</h4>
                        </div>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col" style={{ whiteSpace: "nowrap", minWidth: 120 }}>
                                분야
                                </th>
                                <th scope="col">직업</th>
                            </tr>
                            {majorNames.map((majorName, majorNameIndex) => {
                                const jobsByMajor = (majors || []).filter((job) => {
                                return job?.[2] === majorNameIndex + 1;
                                });
                                return (
                                <tr style={jobsByMajor.length <= 0 ? { display: "none" } : {}}>
                                    <td
                                    style={{
                                        whiteSpace: "nowrap",
                                    }}
                                    >
                                    {majorName}
                                    </td>
                                    <td>
                                    {jobsByMajor.map((job) => {
                                        const [jobSeq, jobName] = job;
                                        return (
                                        <a
                                            className="mr-2"
                                            href={`https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${jobSeq}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {jobName}
                                        </a>
                                        );
                                    })}
                                    </td>
                                </tr>
                                );
                            })}
                            </thead>
                        </table>


                </div>
                <br/>
                <br/>
            <AnyButton
                onClick={(event) => {
                    alert('완료');
                    history.push("/")
                }}>
                처음으로
            </AnyButton>
        </div>
    );
};

const StyledTable = styled.table`
    margin: auto;
    caption-side: top;
    border: none;
    border-collapse: collapse;
    width : 80%;

    caption-side: bottom;


  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

  /* tbody {
    vertical-align: top;
  }              */
  td,
  th {
    border: none;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > th {
    background-color: #ff7900;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

const Resultbox = styled.div `
    margin : auto;
    display: block;
    background: #f6bd60;
    width: 80%;
    height: 10%;
    padding: 20px 25px;
    border-radius: 20px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.13);
`;

const AnyButton = styled.button `
    text-align: center;
    border: 0;
    border-radius: 30px;
    width: 30vw;
    background: #9d4edd;
    color: #fff;
    font-size: 30px;
    display: inline-block;
    margin : auto;
    justify-content: center;
    

`;

export default ReportPage;
