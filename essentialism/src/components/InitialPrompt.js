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
import swal from 'sweetalert';

//import content from "../utils/initialPromptContent";
import PillarCheckboxes from "./FormQuestions/PillarCheckboxes";
import TextFieldQuestions from "./FormQuestions/TextFieldQuestions";
import api from '../utils/api';

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

        if (containerLength == 0 || topThreeContainerLength == 0) {
            swal({title: "Hold up!", text: "Please pick 7 interests and 3 of your top interests before submitting", icon: "warning", dangerMode: true});
        }
        else if (textFieldOne === "" || textFieldTwo === "") {
            swal({title: "The prompts are empty!", text: "Please fill in the prompts", icon: "warning", dangerMode: true});
        } else if (containerValidationMessage === "✔︎" && topThreeContainerValidationMessage === "✔︎") {

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
        } else {
            swal({title: "Something went wrong", icon: "warning", dangerMode: true });
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
            <PillarCheckboxes 
                container={container}
                setContainer={setContainer}
                containerLength={containerLength}
                setContainerLength={setContainerLength}
                topThreeContainer={topThreeContainer}
                setTopThreeContainer={setTopThreeContainer}
                topThreeContainerLength={topThreeContainerLength}
                setTopThreeContainerLength={setTopThreeContainerLength}
                maxLengthFirstPicks={maxLengthFirstPicks}
                maxLengthSecondPicks={maxLengthSecondPicks}
                containerValidationMessage={containerValidationMessage}
                setContainerValidationMessage={setContainerValidationMessage}
                topThreeContainerValidationMessage={topThreeContainerValidationMessage}
                setTopThreeContainerValidationMessage={setTopThreeContainerValidationMessage}/>
            <TextFieldQuestions
                id="promptQuestions"
                textFieldOne={textFieldOne} 
                setTextFieldOne={setTextFieldOne} 
                textFieldTwo={textFieldTwo} 
                setTextFieldTwo={setTextFieldTwo}/>
            <Button
            id='submitButton'
            type='submit'
            onClick={handleSubmit}
            >Submit</Button>
        </div>
    );
};

export default InitialPrompt;