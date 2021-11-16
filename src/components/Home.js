import React, {useState} from 'react';


const Home = ( { history } ) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');


    return (
        <div>
            <header><h1>직업가치관검사</h1></header>
            <div>
                이름
                <br />
                <input
                placeholder="이름을 입력하세요"
                type="text" 
                name="name"
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
                }

                }
                />
                <br />
            </div>
            <div>
                성별
                <br />
                <input type='radio'
                name='gender'
                value='male'
                onclick='' />남성
                <input type='radio'
                name='gender'
                value='female'
                onclick='' />여성
                <br />
            </div>

            <button onClick={ (event) => {
                alert(name);
                history.push("/QuestionPage")}}> 검사 시작 </button>
        </div>
    );
}

export default Home;