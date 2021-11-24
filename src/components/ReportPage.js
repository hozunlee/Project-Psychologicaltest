import React from 'react';

const ReportPage = ({history, location, useParams }) => {
    const inputs = location.state.inputs;
    const answers = location.state.answers;
    
    const {name, gender} = inputs
    console.log("불러온 ::  " +inputs.name)
    console.log("불러온 ::  " +answers)


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
