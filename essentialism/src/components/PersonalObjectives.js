import React, { useState, useContext } from 'react';
import Objective from './Objective';
import { UserContext } from '../context/userContext'

const PersonalObjectives = () => {
    const [objectives, setObjectives] = useContext(UserContext);

    return (
        <div>
            {objectives.map(objective => (
                <Objective name={objective.name}/>
            ))}
        </div>
    );
};

export default PersonalObjectives;