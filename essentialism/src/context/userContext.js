import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const {objectives, setObjectives} = useState([
        {
            name: 'Add Personal Objectives!',
            timeframe: '1 week',
            id: 23124
        },
        {
            name: 'Add More Objectives!',
            timeframe: '2 weeks',
            id: 25433124
        },
    ]);

    return (
        <div>
            <UserContext.Provider value={[objectives, setObjectives]}>
                {props.children}
            </UserContext.Provider>
        </div>
    );
};