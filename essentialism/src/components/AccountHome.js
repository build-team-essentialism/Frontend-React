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
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Prompts = styled.p`
    padding: 2%;
    width: 50%;
    margin: 0 auto;
    margin-top: 2%;
    border: 2px solid white;
    border-radius: 5px;
`;
const Div = styled.div`
    display: flex;
    justify-content: center;
`;
const DeleteX = styled.p`
    margin-left: 4%;
    color: red;
`;
const PromptDeleteX = styled.p`
    text-align: right;
    color: red;
`;
const PromptEdit = styled.p`
    text-align: right;
`;
const PillarsP = styled.p`
    width: 50%;
`;

function AccountHome() {
  
    const [pillars, setPillars] = useState([]);
    const [prompts, setPrompts] = useState([]);

    useEffect(() => {
        api()
            .get(`/api/users/${localStorage.getItem('id')}`)
            .then(res => {

                console.log(res);
                console.log(res.data.user.pillars);
                setPillars(res.data.user.pillars);
                setPrompts(res.data.user.prompts);
            })
            .catch(err => {
                console.log('Error with get AH', err)
            })
    }, [])

    const deletePillars = (event, pillar) => {
        event.preventDefault();
        console.log('Delete pillars id', pillar.id)
        api()
            .delete(`/api/pillars/${pillar.id}`)
            .then(res => {
                console.log('Delete console log', res)
                // this.props.history.push('/accounthome')
                api()
                    .get(`/api/users/${localStorage.getItem('id')}`)
                    .then(res => {
                        console.log(res);
                        console.log(res.data.user.pillars);
                        setPillars(res.data.user.pillars);
                        setPrompts(res.data.user.prompts);
                    })
                    .catch(err => {
                        console.log('Error with get AH', err)
                    })
            })
            .catch(err => {
                console.log('Delete pillar error', err)
            })
    };

    const deletePrompts = (event, prompt) => {
        event.preventDefault();
        console.log('Delete prompt id', prompt.id)
        api()
            .delete(`/api/prompts/${prompt.id}`)
            .then(res => {
                console.log('Delete console log', res)
                // this.props.history.push('/accounthome')
                api()
                    .get(`/api/users/${localStorage.getItem('id')}`)
                    .then(res => {
                        console.log(res);
                        console.log(res.data.user.pillars);
                        setPillars(res.data.user.pillars);
                        setPrompts(res.data.user.prompts);
                    })
                    .catch(err => {
                        console.log('Error with get AH', err)
                    })
            })
            .catch(err => {
                console.log('Delete prompt error', err)
            })
    };

    return (
        <div>
            <h1>Account Home</h1>
            {pillars.map( pillar => (
                <Div>
                    <PillarsP key={pillar.id}>
                        {pillar.pillar}
                    </PillarsP>
                    <DeleteX onClick={(e) => deletePillars(e, pillar)}>
                        X
                    </DeleteX>
                </Div>
            ))}
            {prompts.map( prompt => (
                <Div>
                    <Prompts>
                        <PromptEdit>
                            <Link to={`/promptedit/${prompt.id}`}>
                                Edit
                            </Link>
                        </PromptEdit>
                        {prompt.prompt}
                        <PromptDeleteX onClick={(e) => deletePrompts(e, prompt)}>
                            X
                        </PromptDeleteX>
                    </Prompts>
                </Div>
            ))}
        </div>
    );
};

export default AccountHome;