import React from 'react';

const Objective = ({ name, timeframe }) => {

    return (
        <div>
            <h3>{name}</h3>
            <p>{timeframe}</p>
        </div>
    );
};

export default Objective;