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
import { ErrorMessage } from "./FormValidation/ErrorMessage";
import api from '../utils/api';

function IntialPrompt(props) {

    const [container, setContainer] = useState([]);

    // useEffect(() => {

    // });


    const toggle = (event) => {
        if(event.target.checked == true && !container.includes(event.target.value)) {
            container.push(event.target.value);
            setContainer(container);
            console.log("Pushing!", container);
        } else if(event.target.checked == false && container.includes(event.target.value)) {
            container.map( (interest, index) => {
                if(interest == event.target.value) {
                    container.splice(index, 1);
                    setContainer(container);
                    console.log("Splicing!", container);
                }
            }) // end of map function
        } else {
            console.log("You should never get to this statement! You did something wrong")
            console.log(event.target.value, event.target.checked)
        }
    };

    function validate(event) {
        event.preventDefault();
        if(container.length < 7 || container.length > 7) {
            console.log("To continue, you must pick 7 interests");
        } else {
            console.log("Congrats! You picked 7 interests");
        }
    };


    
    return (
        <div>
            <h1>Pick 7</h1>
            <form>
                <input
                    type='checkbox'
                    name='Athletic ability'
                    value='Athletic ability'
                    onChange={toggle}
                />Athletic ability<br />
                <input
                    type='checkbox'
                    name='Art and literature'
                    value='Art and literature'
                    onChange={toggle}
                />Art and literature<br />
                <input
                    type='checkbox'
                    name='Creativity, discovering, or inventing'
                    value='Creativity, discovering, or inventing'
                    onChange={toggle}
                />Creativity, discovering, or inventing<br />
                <input
                    type='checkbox'
                    name='Independence'
                    value='Independence'
                    onChange={toggle}
                />Independence<br />
                <input
                    type='checkbox'
                    name='Kindness and generosity'
                    value='Kindness and generosity'
                    onChange={toggle}
                />Kindness and generosity<br />
                <input
                    type='checkbox'
                    name='Living in the moment'
                    value='Living in the moment'
                    onChange={toggle}
                />Living in the moment<br />
                <input
                    type='checkbox'
                    name='Membership in a social group'
                    value='Membership in a social group'
                    onChange={toggle}
                />Membership in a social group<br />
                <input
                    type='checkbox'
                    name='Music'
                    value='Music'
                    onChange={toggle}
                />Music<br />
                <input
                    type='checkbox'
                    name='My community'
                    value='My community'
                    onChange={toggle}
                />My community<br />
                <input
                    type='checkbox'
                    name='My moral principles'
                    value='My moral principles'
                    onChange={toggle}
                />My moral principles<br />
                <input
                    type='checkbox'
                    name='Nature and the environment'
                    value='Nature and the environment'
                    onChange={toggle}
                />Nature and the environment<br />
                <input
                    type='checkbox'
                    name='Relationships with friends and family'
                    value='Relationships with friends and family'
                    onChange={toggle}
                />Relationships with friends and family<br />
                <input
                    type='checkbox'
                    name='Sense of humor'
                    value='Sense of humor'
                    onChange={toggle}
                />Sense of humor<br />
                <input
                    type='checkbox'
                    name='Success in my career'
                    value='Success in my career'
                    onChange={toggle}
                />Success in my career<br />
                <p>prompt for user goes here</p>
                <input
                    type='textarea'
                    name='promptone'
                    placeholder='answer here'
                    onChange={toggle}
                /><br />
                <p>prompt for user goes here</p>
                <input
                    type='textarea'
                    name='promptwo'
                    placeholder='answer here'
                    onChange={toggle}
                /><br />
                <button 
                type='submit'
                onClick={validate}
                >Submit</button>
            </form>
        </div>
    );
};

export default IntialPrompt;