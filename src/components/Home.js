import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar'

const Home = ( { history, now, setNow } ) => {
    const [inputs, setInputs] = useState({
        name: "",
        gender: ""
    })

    const {name, gender } = inputs;


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
            <div className="mb-2">
                <Button
                variant="primary"
                size="lg"
                type="button"
                value="buttonChange"
                disabled={!name || !gender}
                onClick={ (event) => {
                    alert(name + gender);
                    history.push("/ExPage")
                    
                    }}> 검사 시작 </Button>{' '}
            </div>
        </div>
    );
}

export default Home;