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
    justify-content: center;
    border-bottom: 1px solid gray;
`;

const Pillar = styled.div`
    margin-left: 2rem;
    padding: 2%;
    width: 45%;
    display: flex;
    justify-content: start;
    align-items: baseline;
`;

const DisabledButton = styled.button`
    background: lightgrey;
    border: 2px solid grey;
    border-radius: 5px;
    padding: 10px 20px;
    margin-bottom: 2rem;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;

`;

const Button = styled.button`
    background: lightgrey;
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    &:hover {
        background-color: khaki;
        color: black;
    }
`;

function InitialPrompt(props) {  

    // MARK: - Array of Objects
    const pillars = [];
    const prompts = [];


    // MARK: - Hook States
    const [container, setContainer] = useState([]);
    const [containerLength, setContainerLength] = useState(0);

    const [topThreeContainer, setTopThreeContainer] = useState([]);
    const [topThreeContainerLength, setTopThreeContainerLength] = useState(0);
    
    const maxLengthFirstPicks = 7;
    const maxLengthSecondPicks = 3;

    const [textFieldOne, setTextFieldOne] = useState("");
    const [textFieldTwo, setTextFieldTwo] = useState("");

    // MARK: - Validation Message State
    const [containerValidationMessage, setContainerValidationMessage] = useState("");
    const [topThreeContainerValidationMessage, setTopThreeContainerValidationMessage] = useState("");

    // MARK: - useEffects
    useEffect(() => {
        if(containerLength === maxLengthFirstPicks) {
            console.log("Hit 7");
            setContainerValidationMessage("✔︎");
            // check to what not picked and then disable
            //cssIdentifier, repo, repoLength, maxRepoLength
            checkToDisableOrEnableFor('.checkbox-1', container, containerLength, maxLengthFirstPicks);
        }
        if(containerValidationMessage === "✔︎" && containerLength < maxLengthFirstPicks) {
            setContainerValidationMessage("To continue, you must pick 7 interests");
            checkToDisableOrEnableFor('.checkbox-1', container, containerLength, maxLengthFirstPicks);
        }
    }, [containerLength]);

    useEffect(() => {
        console.log(topThreeContainerLength);
        if(topThreeContainerLength === maxLengthSecondPicks) {
            console.log("Hit 3")
            setTopThreeContainerValidationMessage("✔︎")
            checkToDisableOrEnableFor('.checkbox-2', topThreeContainer, topThreeContainerLength, maxLengthSecondPicks);
        }

        if(topThreeContainerValidationMessage === "✔︎" && topThreeContainerLength < maxLengthSecondPicks) {
            setTopThreeContainerValidationMessage("To contine, you must pick your top 3");
            checkToDisableOrEnableFor('.checkbox-2', topThreeContainer, topThreeContainerLength, maxLengthSecondPicks);
        }
    }, [topThreeContainerLength]);


    // MARK: - Event Listeners
    // toggle for checkboxes
    const toggle = (event) => {
        if(event.target.checked === true && !container.includes(event.target.value)) {
            add(event, container, setContainer, containerLength, setContainerLength);
        } else if(event.target.checked === false && container.includes(event.target.value)) {
            remove(event, container, setContainer, containerLength, setContainerLength);
        } else {
            console.log("You should never get to this statement! You did something wrong");
        }
    };

    const topThreeToggle = (event) => {
        if(event.target.checked === true && !topThreeContainer.includes(event.target.value)) {
            add(event, topThreeContainer, setTopThreeContainer, topThreeContainerLength, setTopThreeContainerLength);
        } else if(event.target.checked === false && topThreeContainer.includes(event.target.value)) {
            remove(event, topThreeContainer, setTopThreeContainer, topThreeContainerLength, setTopThreeContainerLength);
        } else {
            console.log("You should never get to this statement! You did something wrong");
        }
    };

    // MARK: - ABSTRACTED Adding and Removing from containers (called repos)
    function add(event, repo, setRepo, repoLength, setRepoLength) {
        repo.push(event.target.value);
        setRepoLength(repoLength + 1);
        setRepo(repo)
    }

    function remove(event, repo, setRepo, repoLength, setRepoLength) {
        repo.map( (pillar, index) => {
            if(pillar === event.target.value) {
                repo.splice(index, 1);
                setRepoLength(repoLength - 1);
                return setRepo(repo);
            }
        })
    }

    // MARK: - Object Creation for POST
    function createFormOneForPOST() {
        container.map( (value) => {
            let object = {}
            object["user_id"]=localStorage.getItem('id');
            object["pillar"]=value
            if(isTop(value)) {
                object["top"] = true
            } else {
                object["top"] = false
            }
            pillars.push(object)
        });
    };

    function createFormTwoForPOST() {
        let object = {}
        object["prompt"] = textFieldOne;
        object["user_id"]=localStorage.getItem('id');
        prompts.push(object);
        let object2 = {}
        object2["prompt"] = textFieldTwo;
        object2["user_id"]=localStorage.getItem('id');
        prompts.push(object2);  
    }

    // MARK: - Axios Call
    const handleSubmit = (event) => {
        event.preventDefault();

        createFormOneForPOST();
        api()
            .post(`/api/pillars`, pillars)
            .then(res => {
                console.log('Pillar post res', res)
            })
            .catch(err => {
                console.log('Pillar post err', err)
            })
        
        createFormTwoForPOST();
        api()
            .post(`/api/prompts`, prompts)
            .then(res => {
                console.log('Prompt post res', res)
            })
            .catch(err => {
                console.log('Prompt post err', err)
            })
        props.history.push('/accounthome')
    }

    // MARK: - Checkbox selector
    function getCheckboxesFor(cssIdentifier) {
        const allInputsNodeList = document.querySelectorAll(cssIdentifier);
        const checkboxes = Array.from(allInputsNodeList);        
        return checkboxes;
    }

    // MARK: - Checkbox check
    function checkToDisableOrEnableFor(cssIdentifier, repo, repoLength, maxRepoLength) {
        const notCheckedArray = getCheckboxesFor(cssIdentifier).filter( (object) => !repo.includes(object.name))
        console.log(notCheckedArray);
        if (repoLength === maxRepoLength) {
            return notCheckedArray.forEach( (object) => object.disabled = true);
        } else {
            return notCheckedArray.forEach( (object) => object.disabled = false);
        }
    }

    // MARK: - Check if to see if checked in top three
    function isTop(value) {
        for(let i = 0; i < topThreeContainer.length; i++) {
            if(value === topThreeContainer[i]) {
                return true
            }
        }
        return false;
    }

    // MARK: - MOCK sending data
    const mockSend = (event) => {
        event.preventDefault();
        container.map( (value) => {
            let object = {}
            object["user_id"]=localStorage.getItem('id');
            object["pillar"]=value
            if(isTop(value)) {
                object["top"] = true
            } else {
                object["top"] = false
            }
            pillars.push(object)
        });
        console.log(pillars);
    }
    
    // MARK: - Render HTML
    return (
        <div>
            <h1 className="firstCheckboxes">Pick 7 interests from the list below</h1>
            <form className="firstCheckboxes">
                <ValidationMessage message={containerValidationMessage}/>
                <CountMessage currentCount={containerLength} max={maxLengthFirstPicks} />
                <PromptDiv>
                    {content.map( (name, index) => (
                        <Pillar key={index}>
                            <input
                                className="checkbox-1"
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
            <form className="secondCheckboxes">
                <ValidationMessage message={topThreeContainerValidationMessage}/>
                <CountMessage currentCount={topThreeContainerLength} max={maxLengthSecondPicks} />
                <PromptDiv>
                    {container.map( (name, index) => (
                        <Pillar key={index}>
                            <input
                                className="checkbox-2"
                                type='checkbox'
                                name={name}
                                value={name}
                                onChange={topThreeToggle}
                            ></input>
                            <label>{name}</label>
                            <br/>
                        </Pillar>
                    ))}
                </PromptDiv>
            </form>
            <TextFieldQuestions
                id="promptQuestions"
                textFieldOne={textFieldOne} 
                setTextFieldOne={setTextFieldOne} 
                textFieldTwo={textFieldTwo} 
                setTextFieldTwo={setTextFieldTwo}/>
            <DisabledButton
            id='submitButton'
            type='submit'
            onClick={handleSubmit}
            >Disabled Submit</DisabledButton>
        </div>
    );
};

export default InitialPrompt;