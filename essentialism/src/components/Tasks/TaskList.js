import React, { useState, useContext } from 'react';
import Task from './Task';
import { TaskContext } from '../../context/TaskContext';

const TaskList = () => {
    const [tasks, setTasks] = useContext(TaskContext);
    return (
        <div>
            {tasks.map(task => (
                <Task name={task.name} timeframe={task.timeframe} key={task.id} />
            ))}
        </div>
    );
};

export default TaskList;