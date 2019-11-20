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
    const [topThreeContainerValidationMessage, setTopThreeContainerValidationMessage] = 
    useState("");

    // const [prompt, setPrompt] = useState({
    //     user_id: localStorage.getItem('id')
    //     prompt: '',
    // });

    // const handleChanges = (event) => {
    //     event.preventDefault();
    //     setPrompt({
    //         ...prompt,
    //         [event.target.name]: event.target.value
    //     });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     api()
    //         .post(`/api/prompts`, prompt)
    //         .then(res => {
    //             console.log('Prompt post res', res)
    //         })
    //         .catch(err => {
    //             console.log('Prompt post err', err)
    //         })
    // }

    useEffect(() => {
        if(containerLength === maxLengthFirstPicks) {
            console.log("Hit 7");
            setContainerValidationMessage("✔︎");
            // check to what not picked and then disable
            checkToDisableOrEnableCheckboxesFirst();
        }
        if(containerValidationMessage === "✔︎" && containerLength < maxLengthFirstPicks) {
            setContainerValidationMessage("To continue, you must pick 7 interests");
            checkToDisableOrEnableCheckboxesFirst();
        }
    }, [containerLength]);

    useEffect(() => {
        console.log(topThreeContainerLength);
        if(topThreeContainerLength === maxLengthSecondPicks) {
            console.log("Hit 3")
            setTopThreeContainerValidationMessage("✔︎")
            checkToDisableOrEnableCheckboxesSecond();
        }

        if(topThreeContainerValidationMessage === "✔︎" && topThreeContainerLength < maxLengthSecondPicks) {
            setTopThreeContainerValidationMessage("To contine, you must pick your top 3");
            checkToDisableOrEnableCheckboxesSecond();
        }
    }, [topThreeContainerLength]);


    // MARK: - Axios Post

    // MARK: - Event Listeners
    // toggle for checkboxes
    const toggle = (event) => {
        if(event.target.checked === true && !container.includes(event.target.value)) {
            containerAdd(event)
        } else if(event.target.checked === false && container.includes(event.target.value)) {
            containerRemove(event)
        } else {
            console.log("You should never get to this statement! You did something wrong");
        }
    };

    const topThreeToggle = (event) => {
        if(event.target.checked === true && !topThreeContainer.includes(event.target.value)) {
            topThreeContainerAdd(event)
        } else if(event.target.checked === false && topThreeContainer.includes(event.target.value)) {
            topThreeContainerRemove(event)
        } else {
            console.log("You should never get to this statement! You did something wrong");
        }
    }


    // MARK: - Container Helper functions
    function containerAdd(event) {
        container.push(event.target.value);
        setContainerLength(containerLength + 1);
        setContainer(container);
    }

    function containerRemove(event) {
        container.map( (interest, index) => {
            if(interest === event.target.value) {
                container.splice(index, 1);
                setContainerLength(containerLength - 1);
                return setContainer(container);
            }
        }) // end of map function
    }

    // MARK: - Top Three Container Helper functions
    function topThreeContainerAdd(event) {
        topThreeContainer.push(event.target.value);
        setTopThreeContainerLength(topThreeContainerLength + 1);
        setTopThreeContainer(topThreeContainer);
    }

    function topThreeContainerRemove(event) {
        topThreeContainer.map( (interest, index) => {
            if(interest === event.target.value) {
                topThreeContainer.splice(index, 1);
                setTopThreeContainerLength(topThreeContainerLength - 1);
                return setTopThreeContainer(topThreeContainer);
            }
        }) // end of map function
    }

    // MARK: - Button Validations
    function validateFormOne(event) {
        event.preventDefault();
        container.map( (value) => {
            let object = {}
            object["user_id"]=localStorage.getItem('id');
            object["pillar"]=value
            object["top"]=false;
            pillars.push(object)
        });

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

// const [pillar, setPillar] = useState({
//         user_id: localStorage.getItem('id')
//         pillar: '',
//         top: false
//     });

//     const handleChanges = (event) => {
//         event.preventDefault();
//         setPillar({
//             ...pillar,
//             [event.target.name]: event.target.value
//         });
//     };

    const handleSubmit = (event) => {
        event.preventDefault();
        validateFormOne(event);
        api()
            .post(`/api/pillars`, pillars)
            .then(res => {
                console.log('Pillar post res', res)
            })
            .catch(err => {
                console.log('Pillar post err', err)
            })
        
        prompts.push(textFieldOne);
        prompts.push(textFieldTwo);
        api()
            .post(`/api/prompts`, prompts)
            .then(res => {
                console.log('Prompt post res', res)
            })
            .catch(err => {
                console.log('Prompt post err', err)
            })

    }

    function getCheckboxesForOne() {
        const allInputsNodeList = document.querySelectorAll('.checkbox-1');
        const checkboxes = Array.from(allInputsNodeList);        
        return checkboxes;
    }

    function getCheckboxesForTwo() {
        const allInputsNodeList = document.querySelectorAll('.checkbox-2');
        const checkboxes = Array.from(allInputsNodeList);
        return checkboxes;
    }

    function checkToDisableOrEnableCheckboxesFirst() {
        const notCheckedArray = getCheckboxesForOne().filter( (object) => !container.includes(object.name))
        if (containerLength === 7) {
            return notCheckedArray.forEach( (object) => object.disabled = true);
        } else {
            return notCheckedArray.forEach( (object) => object.disabled = false);
        }
    }

    function checkToDisableOrEnableCheckboxesSecond() {
        const notCheckedArray = getCheckboxesForTwo().filter( (object) => !topThreeContainer.includes(object.name))
        if (topThreeContainerLength === 3) {
            return notCheckedArray.forEach( (object) => object.disabled = true);
        } else {
            return notCheckedArray.forEach( (object) => object.disabled = false);
        }
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
            <Button
            type='submit'
            onClick={handleSubmit}
            >Submit</Button>
        </div>
    );
};

export default InitialPrompt;