import React, { useState } from 'react';
import api from '../utils/api';
import styled from 'styled-components';

const LoginDiv = styled.div`
    padding: 5% 0% 10% 0%;
    border: 4px solid black;
    border-radius: 5px;
    background-color: indianred;
`;
const Input = styled.input`
    display: block;
    padding: 10px;
	width: 50%;
	margin-bottom: 10px;
	outline: none;
	border-radius: 5px;
    border: 2px solid black;
    margin: 0 auto;
`;
const Button = styled.button`
    background: lightgrey;
	border: 2px solid black;
	border-radius: 5px;
	padding: 10px 20px;
	cursor: pointer;
	font-size: 14px;
    font-weight: 500;
    &:hover {
        background-color: khaki;
        color: black;
    }
`;

function Login(props) {
    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (event) => {
        event.preventDefault();
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        api()
            .post('/api/auth/login', data)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/accounthome')
            })
            .catch(err => {
                console.log(err)
            });
    };

    return (
        <LoginDiv>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    type='text'
                    name='username'
                    placeholder='username'
                    value={data.username}
                    onChange={handleChange}
                /><br />
                <Input
                    type='password'
                    name='password'
                    placeholder='password'
                    value={data.password}
                    onChange={handleChange}
                /><br />
                <Button type='submit'>Login</Button>
            </form>
        </LoginDiv>
    );
};

export default Login;