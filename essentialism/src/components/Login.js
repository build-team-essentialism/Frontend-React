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

    function check(form) {
        if (form.username.value == '' || form.username.value == null) {
            alert('Please enter a username.');
            return false;
        } 
        if (form.password.value == '' || form.password.value == null) {
            alert('A password is required to log in.')
            return false;
        } else {
            return true;
        }
    }

    function validateForm (value) {
        const UsernameRegex = /^[a-z0-9_-]{3,16}$/;
        if(UsernameRegex) {
            return 'Please enter a username with only letters, numbers, or dashes.'
        } else {
            
        }
    }
            
            return (
            <LoginDiv>
            <h1>Login</h1>
            <Form name='formvalidate' onSubmit={check}>
                <Label for='username'>Username</Label>
                <Input
                    className='mx-auto my-2 w-50'
                    type='text'
                    name='username'

                    placeholder='username'
                    value={data.username}
                    onChange={handleChange}
                /><br />

                <Input
                    className='mx-auto my-2 w-50'
                    type='password'
                    name='password'

                    placeholder='password'
                    value={data.password}
                    onChange={handleChange}
                /><br />

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