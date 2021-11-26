import React, {useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Home = ( { history } ) => {
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
                value='100323'
                onChange={genderHandler} />남성
                <input type='radio'
                name='gender'
                value='100324'
                onChange={genderHandler} />여성
                <br />
            </div>
            <div className="mb-2">
                <AnyButton
                variant="primary"
                size="lg"
                type="button"
                value="buttonChange"
                disabled={!name || !gender}
                onClick={ (event) => {
                    alert(name + gender);
                    history.push({
                        pathname: `/ExPage/${name}`,
                        state: {inputs: inputs}
                        
                    })
                    
                    
                    }}> 검사 시작 </AnyButton>
            </div>
        </div>
    );
}


const AnyButton = styled.button`
    text-align: center;
    border: 0;
    border-radius: 30px;
    width: 20vw;
    background: skyblue;
    color: #fff;
    font-size: 3vw;
`;


export default Home;