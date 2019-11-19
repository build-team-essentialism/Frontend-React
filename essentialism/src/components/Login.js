import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';
import styled from 'styled-components';
import { Button, Form, Label, Input } from 'reactstrap';

const Login = () => {
    const [user, setUser] = useState({ username: '', password: '' });
    
    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(user.username);
        console.log(user.password);
        // Cannot handle submit until logged values have an endpoint to post to 
        // POST method will go here:
        // .post(`https://website.com/data`)
        // .then(response => {
        //  setUser(response.data)
        // )
        // .catch(error => {
        //  console.log('Login Form submit error', error);
        // })
    };

    function validateForm (value) {
        const validUsername = value.search(/^[a-z0-9_-]{3,16}$/);
        if(validUsername) {
            return 'Please enter a username with only letters, numbers, or dashes.'
        } else {
            
        }
    }
            
            return (
            <LoginDiv>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <Label for='username'>Username</Label>
                <Input
                    className='mx-auto my-2 w-50'
                    type='text'
                    name='username'
                    value={user.username}
                    onChange={event => handleChange(event)}
                    />
                <Label for='password'>Password</Label>
                <Input
                    className='mx-auto my-2 w-50'
                    type='password'
                    name='password'
                    value={user.password}
                    onChange={event => handleChange(event)}
                    />
                <Button type='submit'>Login</Button>
            </Form>
        </LoginDiv>
    );
};

const LoginDiv = styled.div`
    padding: 5% 0% 10% 0%;
    border: 4px solid black;
    border-radius: 5px;
    background-color: indianred;
`;

export default Login;