// Create a page that then shows the list of values the person chose. Prompt the user to now choose the top 3 that are the MOST important to them. Then give students the prompt: In a few sentences, describe why the selected values are important to you. Focus on your thoughts/feelings, and don’t worry about spelling, grammar, or how well-written it is.

// Page shows list of values that user picked from this list and they can pick the top 3 that are MOST important to them:
// (List: 
    // • Athletic ability 
    // • Art and literature 
    // • Creativity, discovering, or inventing things to make a difference in the world 
    // • Independence 
    // • Kindness and generosity 
    // • Living in the moment 
    // • Membership in a social group (such as your community, racial group, or school club) 
    // • Music 
    // • My community 
    // • My moral principles 
    // • Nature and the environment 
    // • Relationships with friends and family 
    // • Sense of humor 
    // • Success in my career 
    // • Other: _________________).


    //  === Ideas for how to implement this ===
// Make each option an individual card similar to the todo list project we have all worked with where the person has the ability to mark the ones they align with. This will populate their account page with the ones they picked where they can then pick their top 3 and fill out the 2 prompts we give them
    //  Page 1: Full list of values
    //  Page 2: Condensed list of values with prompts
    //  OR
    //  One page that is a combination of the 2 above put into 1 form.

import React from 'react';
import api from '../utils/api';

function SecondForm() {
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
                <p>prompt for user goes here</p>
                <input
                    type='textarea'
                    name='promptone'
                    placeholder='answer here'
                /><br />
                <p>prompt for user goes here</p>
                <input
                    type='textarea'
                    name='promptwo'
                    placeholder='answer here'
                /><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default SecondForm;