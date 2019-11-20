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
import styled from 'styled-components';

import content from "../utils/initialPromptContent";
import ValidationMessage from "./FormValidation/ValidationMessage";
import CountMessage from "./FormValidation/CountMessage";
import TextFieldQuestions from "./FormQuestions/TextFieldQuestions";
import api from '../utils/api';


const PromptDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid gray;
`;

const Pillar = styled.div`
    padding: 2%;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function InitialPrompt(props) {
    // MARK: - Hook States
    const [container, setContainer] = useState([]);
    const [containerLength, setContainerLength] = useState(0)

    const [textFieldOne, setTextFieldOne] = useState("");
    const [textFieldTwo, setTextFieldTwo] = useState("");

    // MARK: - Error Message State
    const [containerValidationMessage, setContainerValidationMessage] = useState("")

    // MARK: - Event Listeners
    // toggle for checkboxes
    const toggle = (event) => {
        if(event.target.checked === true && !container.includes(event.target.value)) {
            container.push(event.target.value);
            setContainerLength(containerLength + 1);
            setContainer(container);
            checkToDisableOrEnableCheckboxes(containerLength + 1);
        } else if(event.target.checked === false && container.includes(event.target.value)) {
            container.map( (interest, index) => {
                if(interest === event.target.value) {
                    container.splice(index, 1);
                    setContainerLength(containerLength - 1);
                    checkToDisableOrEnableCheckboxes(containerLength - 1);
                    return setContainer(container);
                }
            }) // end of map function
        } else {
            console.log("You should never get to this statement! You did something wrong");
        }
    };

    function validateFormOne(event) {
        event.preventDefault();
        if(containerLength < 7 || containerLength > 7) {
            setContainerValidationMessage(`To continue, you must pick 7 interests.`);
        } else {
            setContainerValidationMessage("✔︎");
        }
    };

    function validateFormTwo(event) {
        event.preventDefault();
        console.log("T1 in prompt", textFieldOne);
        console.log("T2 in prompt", textFieldTwo);
        if(textFieldOne === "" || textFieldTwo === "") {
            console.log("NOPE!")
        } else {
            console.log("validating form one");
            validateFormOne(event);
        }
    }


    function checkToDisableOrEnableCheckboxes(containerLength) {
        const allInputsNodeList = document.querySelectorAll('input');
        const allInputsArray = Array.from(allInputsNodeList);
        const checkboxes = allInputsArray.splice(0, allInputsArray.length-2);
        const notCheckedArray = checkboxes.filter( (object) => !container.includes(object.name))
        if (containerLength === 7) {
            return notCheckedArray.forEach( (object) => object.disabled = true);
        } else {
            return notCheckedArray.forEach( (object) => object.disabled = false);
        }
    }
    
    // MARK: - Render HTML
    return (
        <div>
            <h1>Pick 7 interests from the list below</h1>
            <form>
                <ValidationMessage message={containerValidationMessage}/>
                <CountMessage message={containerLength} />
                <PromptDiv>
                    {content.map( (name, index) => (
                        <Pillar key={index}>
                            <input
                                type='checkbox'
                                name={name}
                                value={name}
                                onChange={toggle}
                            ></input>
                            <label>{name}</label>
                            <br/>
                        </Pillar>
                    ))}
                </PromptDiv>
            </form>
            <TextFieldQuestions 
                textFieldOne={textFieldOne} 
                setTextFieldOne={setTextFieldOne} 
                textFieldTwo={textFieldTwo} 
                setTextFieldTwo={setTextFieldTwo}/>
            <button
            type='submit'
            onClick={validateFormTwo}
            >Submit</button>
        </div>
    );
};

export default InitialPrompt;