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

import React, { useState, useEffect } from 'react';
import api from '../utils/api';

function AccountHome() {

    const [pillars, setPillars] = useState([]);

    useEffect(() => {
        api()
            .get(`/api/users/${localStorage.getItem('id')}`)
            .then(res => {
                console.log(res);
                console.log(res.data.user.pillars);
                setPillars(res.data.user.pillars);
            })
            .catch(err => {
                console.log('Error with get AH', err)
            })

        api()
            .get(`/api/prompts/`)
    }, [])

    return (
        <div>
            <h1>Account Home</h1>
            {pillars.map( pillar => (
                <p>{pillar.pillar}</p>
            ))}
        </div>
    );
};

export default AccountHome;