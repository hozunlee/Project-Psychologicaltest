import React, {useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import work from './img/work.jpg'

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
            <Title>직업가치관검사</Title>
            <div className="HomeImageContainer">
                <Mainimg src={work} alt="workImg"/>
            </div>
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
            <br/>
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
            <br/>
            <div className="mb-2">
                <AnyButton
                variant="primary"
                size="lg"
                type="button"
                value="buttonChange"
                disabled={!name || !gender}
                onClick={ (event) => {
                    
                    history.push({
                        pathname: `/ExPage/${name}`,
                        state: {inputs: inputs}
                        
                    })
                    
                    
                    }}> 😎시작😎 </AnyButton>
            </div>
        </div>
    );
}

const Title = styled.h1`
    font-size: 4rem;
    font-weight: 500;
    color: #264653;
`;

const Mainimg = styled.img`
    margin-left: 20px;
    margin-right: 20px;
    width: auto;
    height: 200px;
    overflow: hidden;
    
    
`

const AnyButton = styled.button `
    text-align: center;
    border: 0;
    border-radius: 30px;
    width: 30vw;
    background: #e76f51;
    color: #fff;
    font-size: 30px;
    margin : auto;
    justify-content: center;
`;

export default Home;