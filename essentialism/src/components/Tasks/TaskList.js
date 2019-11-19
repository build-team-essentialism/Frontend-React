import React, { useState, useContext } from 'react';
import Task from './Task';
import { TaskContext } from '../../context/TaskContext';
import styled from 'styled-components';

const TaskPage = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
const TaskDiv = styled.div`
    padding: 2%;
    margin: 2%;
    width: 25%;
    background-color: grey;
    border: 2px solid black;
    border-radius: 5px;
    &:hover {
        background-color: khaki;
        color: black;
    }
    &:click {
        background-color: indianred;
    }
`;

const TaskList = () => {
    const [tasks, setTasks] = useContext(TaskContext);
    return (
        <TaskPage>
            {tasks.map(task => (
                <TaskDiv>
                    <Task name={task.name} timeframe={task.timeframe} key={task.id} />
                </TaskDiv>
            ))}
        </TaskPage>
    );
};

export default TaskList;