import React from 'react';
import styled from 'styled-components';

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

function Register() {
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