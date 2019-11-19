import React, { useState, createContext } from 'react';

export const TaskContext = createContext();

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([
        {
            name: 'Add Task(s)!',
            timeframe: '10 minutes',
            id: 23124
        },
        // {
        //     name: 'Now Add More!',
        //     timeframe: '2 weeks',
        //     id: 2566124
        // },
    ]);

    console.log('Tasks', tasks);
    
    return (
        <TaskContext.Provider value={[tasks, setTasks]}>
            {props.children}
        </TaskContext.Provider>
    );
};
