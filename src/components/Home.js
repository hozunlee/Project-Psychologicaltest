import React, {useState} from 'react';


const Home = ( { history } ) => {
    const [inputs, setInputs] = useState({
        name: "",
        gender: "",
        buttonChange: ""
    })
    // const [btn, setBtn] = useState(true)

    const {name, gender, buttonChange} = inputs;


    const genderHandler = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
        
    
    

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
                    setInputs({
                        ...inputs,
                        [event.target.name]: event.target.value
                    });
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
                onChange={genderHandler} />남성
                <input type='radio'
                name='gender'
                value='female'
                onChange={genderHandler} />여성
                <br />
            </div>

            <button 
            type="button"
            value="buttonChange"
            disabled={
                name.length !== 0 &&
                gender.length !== 0
                ? false:true
            }
            onClick={ (event) => {
                alert(name + gender);
                history.push("/QuestionPage")
                
                }}> 검사 시작 </button>
        </div>
    );
}

export default Home;