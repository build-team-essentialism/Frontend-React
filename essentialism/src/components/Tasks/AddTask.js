import React, { useState, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

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
        <form onSubmit={addTask}>
            <input
                type='text'
                name='name'
                placeholder='task name'
                value={name}
                onChange={updateName}
            /><br />
            <input
                type='text'
                name='timeframe'
                placeholder='time to complete'
                value={timeframe}
                onChange={updateTimeframe}
            /><br />
            <button>Add Task</button>
        </form>
    );
};

export default AddTask;