import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import styled from 'styled-components';

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

function PromptEdits(props) {
    const [prompt, setPrompt] = useState({
        id: '',
        prompt: ''
    });

    useEffect(() => {
        api()
            .get(`/api/prompts/${props.match.params.id}`)
            .then(res => {
                setPrompt(res.data)
            })
            .catch(err => {
                console.log('Prompt edit error', err)
            });
    }, [props.match.params.id]);

    const handleChange = (event) => {
        setPrompt({
            ...prompt,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        api()
            .put(`/api/prompts/${props.match.params.id}`, prompt)
            .then(res => {
                props.history.push('/accounthome')
            })
            .catch(err => {
                console.log('Error with edit put req', err)
            });
    };

    return (
        <>
            <h1>Update Prompt</h1>
            <p>Prompt 1: Why are these values important to you?</p>
            <p>Prompt 2: What projects are you involved in?</p>
            <form onSubmit={handleSubmit}>
                <Input
                    type='textarea'
                    name='prompt'
                    placeholder='prompt'
                    value={prompt.prompt}
                    onChange={handleChange}
                /><br />
                <Button type='submit'>Save</Button>
            </form>
        </>
    );
};

export default PromptEdits;