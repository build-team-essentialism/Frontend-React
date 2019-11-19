import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../utils/api';

const RegisterDiv = styled.div`
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

function Register(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault(props);
        // api()
        //     .post('', {
        //         username: username,
        //         password
        //     })
        //     .then(res => {
        //         console.log(res);
        //         localStorage.setItem('token', res.data.token);
        //         props.history.push('/accounthome');
        //     })
        //     .catch(err => {
        //         console.log('Error with register', err)
        //     });
    };

    return (
        <RegisterDiv>
            <h1>Register a New Account</h1>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
                <Input
                    type='text'
                    name='username'
                    placeholder='username'
                    // value={data.username}
                    // onChange={handleChange}
                /><br />
                <Input
                    type='password'
                    name='password'
                    placeholder='password'
                    // value={data.password}
                    // onChange={handleChange}
                /><br />
                <Button type='submit'>Register</Button>
            </form>
        </RegisterDiv>
    );
};

export default Register;