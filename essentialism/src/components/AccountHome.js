import React, { useState, useEffect, useContext } from 'react';
import api from '../utils/api';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

const Prompts = styled.p`
    padding: 2%;
    width: 75%;
    margin: 0 auto;
    margin-top: 2%;
    border: 4px solid black;
    border-radius: 5px;
`;
const PromptsText = styled.p`
    display: felx;
    flex-wrap: wrap;
`;
const Div = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2%;
`;
const DeleteX = styled.p`
    margin-left: 4%;
    color: red;
`;
const PromptDeleteX = styled.p`
    text-align: right;
    color: red;
`;
const PromptEdit = styled.p`
    text-align: right;
`;
const PillarsP = styled.p`
    width: 50%;
    text-align: left;
`;
const TaskCount = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 15%;
    padding: 1% 1% 0% 1%;
    margin: 0% 0% 1% 1%;
    border: 2px solid black;
    border-radius: 5px;
    background: khaki;
    color: black;
`;

function AccountHome() {
    const [tasks, setTasks] = useContext(TaskContext);
    const [pillars, setPillars] = useState([]);
    const [prompts, setPrompts] = useState([]);

    useEffect(() => {
        api()
            .get(`/api/users/${localStorage.getItem('id')}`)
            .then(res => {

                console.log(res);
                console.log(res.data.user.pillars);
                setPillars(res.data.user.pillars);
                setPrompts(res.data.user.prompts);
            })
            .catch(err => {
                console.log('Error with get AH', err)
            })
    }, [])

    const deletePillars = (event, pillar) => {
        event.preventDefault();
        console.log('Delete pillars id', pillar.id)
        api()
            .delete(`/api/pillars/${pillar.id}`)
            .then(res => {
                console.log('Delete console log', res)
                // this.props.history.push('/accounthome')
                api()
                    .get(`/api/users/${localStorage.getItem('id')}`)
                    .then(res => {
                        console.log(res);
                        console.log(res.data.user.pillars);
                        setPillars(res.data.user.pillars);
                        setPrompts(res.data.user.prompts);
                    })
                    .catch(err => {
                        console.log('Error with get AH', err)
                    })
            })
            .catch(err => {
                console.log('Delete pillar error', err)
            })
    };

    const deletePrompts = (event, prompt) => {
        event.preventDefault();
        console.log('Delete prompt id', prompt.id)
        api()
            .delete(`/api/prompts/${prompt.id}`)
            .then(res => {
                console.log('Delete console log', res)
                // this.props.history.push('/accounthome')
                api()
                    .get(`/api/users/${localStorage.getItem('id')}`)
                    .then(res => {
                        console.log(res);
                        console.log(res.data.user.pillars);
                        setPillars(res.data.user.pillars);
                        setPrompts(res.data.user.prompts);
                    })
                    .catch(err => {
                        console.log('Error with get AH', err)
                    })
            })
            .catch(err => {
                console.log('Delete prompt error', err)
            })
    };

    return (
        <div>
            <h1>Welcome to your home page.</h1>
            <p>If this is your first time here, use the Add button below to begin building out your pillars and prompts!</p>
            <p>
                <Link to='/initialprompt'>
                    Add
                </Link>
            </p>
            <h1>My Pillars</h1>
            {pillars.map( pillar => (
                <Div>
                    <PillarsP key={pillar.id}>
                        {pillar.pillar}
                    </PillarsP>
                    <PromptEdit>
                            <Link to={`/pillaredit/${pillar.id}`}>
                                Edit
                            </Link>
                        </PromptEdit>
                    <DeleteX onClick={(e) => deletePillars(e, pillar)}>
                        X
                    </DeleteX>
                </Div>
            ))}<br />
            <h1>My Prompts</h1>
            {prompts.map( prompt => (
                <Div>
                    <Prompts>
                        <PromptEdit>
                            <Link to={`/promptedit/${prompt.id}`}>
                                Edit
                            </Link>
                        </PromptEdit>
                        {prompt.prompt}
                        <PromptDeleteX onClick={(e) => deletePrompts(e, prompt)}>
                            X
                        </PromptDeleteX>
                    </Prompts>
                </Div>
            ))}
            <TaskCount>
                <Link to='/tasks'>
                    <p>Tasks: {tasks.length}</p>
                </Link>
            </TaskCount>
        </div>
    );
};

export default AccountHome;