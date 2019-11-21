import React, { useState, useEffect } from 'react';
import api from '../utils/api';

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
            <form onSubmit={handleSubmit}>
                <input
                    type='textarea'
                    name='prompt'
                    value={prompt.prompt}
                    onChange={handleChange}
                /><br />
                <button type='submit'>Save</button>
            </form>
        </>
    );
};

export default PromptEdits;