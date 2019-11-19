import React, { useState, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import styled from 'styled-components';

const Form = styled.form`
    padding-bottom: 2%;
    background-color: indianred;
    border: 2px solid black;
    border-radius: 5px;
    width: 50%;
    margin: 0 auto;
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
const P = styled.p`
    text-align: left;
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

const AddTask = () => {
    const [name, setName] = useState('');
    const [timeframe, setTimeframe] = useState('');
    const [tasks, setTasks] = useContext(TaskContext);

    const updateName = (event) => {
        setName(event.target.value)
    };

    const updateTimeframe = (event) => {
        setTimeframe(event.target.value)
    };

    const addTask = event => {
        event.preventDefault();
        setTasks(prevTasks => [...prevTasks, {name: name, timeframe: timeframe}])
    };

    return (
        <>
            <h1>Task List</h1>
            <P>Use this page as a tracker/reminder list that helps you focus on your goals. Reference the pillars you chose as well as your prompts to develop tasks. These tasks should be smaller breakdowns of your overall challenges. Be sure to name you tasks accordingly so you know exactly what your seeking to accomplish as well as a realistic timeframe.</P>
            <Form onSubmit={addTask}>
                <h2>Create Task</h2>
                <Input
                    type='text'
                    name='name'
                    placeholder='task name'
                    value={name}
                    onChange={updateName}
                /><br />
                <Input
                    type='text'
                    name='timeframe'
                    placeholder='time to complete'
                    value={timeframe}
                    onChange={updateTimeframe}
                /><br />
                <Button>Add Task</Button>
            </Form>
        </>
    );
};

export default AddTask;