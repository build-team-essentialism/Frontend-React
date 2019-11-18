import React from 'react';
import api from '../utils/api';
    
function InitialPrompt() {
    return (
        <div>
            <h1>Pick 7</h1>
            <form>
                <input
                    type='checkbox'
                    name='one'
                    value='one'
                />one<br />
                <input
                    type='checkbox'
                    name='two'
                    value='two'
                />two<br />
                <input
                    type='checkbox'
                    name='three'
                    value='three'
                />three<br />
                <input
                    type='checkbox'
                    name='four'
                    value='four'
                />four<br />
                <input
                    type='checkbox'
                    name='five'
                    value='five'
                />five<br />
                <input
                    type='checkbox'
                    name='six'
                    value='six'
                />six<br />
                <input
                    type='checkbox'
                    name='seven'
                    value='seven'
                />seven<br />
                <input
                    type='checkbox'
                    name='eight'
                    value='eight'
                />eight<br />
                <input
                    type='checkbox'
                    name='nine'
                    value='nine'
                />nine<br />
                <input
                    type='checkbox'
                    name='ten'
                    value='ten'
                />ten<br />
                <input
                    type='checkbox'
                    name='eleven'
                    value='eleven'
                />eleven<br />
                <input
                    type='checkbox'
                    name='twelve'
                    value='twelve'
                />twelve<br />
                <input
                    type='checkbox'
                    name='thirteen'
                    value='thirteen'
                />thirteen<br />
                <input
                    type='checkbox'
                    name='fourteen'
                    value='fourteen'
                />fourteen<br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default InitialPrompt;