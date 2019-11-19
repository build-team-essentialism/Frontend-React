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
import content from "../utils/initialPromptContent";
import ErrorMessage from "./FormValidation/ErrorMessage";
import CountMessage from "./FormValidation/CountMessage";
import api from '../utils/api';

function InitialPrompt(props) {

    //MARK: - Hook States
    const [container, setContainer] = useState([]);
    const [containerLength, setContainerLength] = useState(0)
    const [textAreaOne, setTextAreaOne] = useState("");
    const [textAreaTwo, setTextAreaTwo] = useState("");

    const [containerAll] = useState(content);

    const [containerErrorMessage, setContainerErrorMessage] = useState("");
    const [textFieldOneErrorMessage, setTextFieldOneErrorMessage] = useState("");
    const [textFieldTwoErrorMessage, setTextFieldTwoErrorMessage] = useState("");

    // MARK: - Event Listeners
    const toggle = (event) => {
        if(event.target.checked === true && !container.includes(event.target.value)) {
            container.push(event.target.value);
            setContainer(container);
            setContainerLength(containerLength + 1);
            console.log("Pushing!", container);
        } else if(event.target.checked === false && container.includes(event.target.value)) {
            container.map( (interest, index) => {
                if(interest === event.target.value) {
                    container.splice(index, 1);
                    setContainerLength(containerLength - 1);
                    console.log("Splicing!", container);
                    return setContainer(container);
                }
            }) // end of map function
        } else {
            console.log("You should never get to this statement! You did something wrong");
            console.log(event.target.value, event.target.checked);
        }
    };

    function validate(event) {
        event.preventDefault();
        if(containerLength < 7 || containerLength > 7) {
            setContainerErrorMessage(`To continue, you must pick 7 interests.`);
            if(textAreaOne === "") {
               setTextFieldOneErrorMessage(`Woah! Buddy your first text field is empty. Give us something.`);
            }
            if(textAreaTwo === "") {
                setTextFieldTwoErrorMessage(`Looks like your second text field is empty. Could you please put something into it`)
            }
        } else if (containerLength == 7) {
            setContainerErrorMessage("seven of seven");
            disableCheckboxes();
        }
    };

    function disableCheckboxes() {
        // look into ways to disable the other textboxes, map through checkbox and container
        const checkboxes = document.querySelectorAll("input");
    }
    
    // MARK: - Render HTML
    return (
        <div>
            <h1>Pick 7 interests from the list below</h1>
            <form>
            <ErrorMessage message={containerErrorMessage}/>
            <CountMessage message={containerLength} />
            {content.map( (name, index) => (
                <div key={index}>
                    <input
                        type='checkbox'
                        name={name}
                        value={name}
                        onChange={toggle}
                    ></input>
                    <label>{name}</label>
                    <br/>
                </div>
            ))}
                <p>Why are these values important to you? Don't worry about spelling or grammar. This is for your eyes only.</p>
                <ErrorMessage message={textFieldOneErrorMessage}/>
                <input
                    type='textarea'
                    name='promptone'
                    placeholder='answer here'
                /><br />
                <p>prompt for user goes here</p>
                <ErrorMessage message={textFieldTwoErrorMessage}/>
                <input
                    type='textarea'
                    name='promptwo'
                    placeholder='answer here'
                /><br />
                <button 
                type='submit'
                onClick={validate}
                >Submit</button>
            </form>
        </div>
    );
};

export default InitialPrompt;