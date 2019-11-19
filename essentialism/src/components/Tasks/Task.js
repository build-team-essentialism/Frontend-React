import React, { useState } from 'react';

const Task = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.timeframe}</p>
        </div>
    );
};

export default Task;