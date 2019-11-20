import React, { useState } from "react";
import styled from 'styled-components';
import ValidationMessage from "../FormValidation/ValidationMessage";

const TextFieldForm = styled.form`
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const TextAreaInput = styled.input`
    max-width: 100% !important;
    width: 100%;
    height: 3rem;
    border-radius: 0.2rem;
    border: 0px solid transparent;
`;

function TextFieldQuestions(props) {
    // MARK: - passing props
    const { textFieldOne, setTextFieldOne, textFieldTwo, setTextFieldTwo } = props;

    // MARK: - hooks for validation message
    const [textFieldOneValidationMessage, setTextFieldOneValidationMessage] = useState("");
    const [textFieldTwoValidationMessage, setTextFieldTwoValidationMessage] = useState("");

    // MARK: - event listeners
    function hasChangedTextFieldOne(event) {
        if (event.target.value == "") {
            setTextFieldOne("");
            setTextFieldOneValidationMessage("It's important for you to write in your why's into the textfield");
        } else {
            setTextFieldOne(event.target.value);
            console.log("t1", textFieldOne);
            setTextFieldOneValidationMessage("✔︎");
        }
    }

    function hasChangedTextFieldTwo(event) {
        if (event.target.value == "") {
            setTextFieldTwo("");
            setTextFieldTwoValidationMessage("Please place all the projects that you are working on in the textfield below" )
        } else {
            setTextFieldTwo(event.target.value);
            console.log("t2", textFieldTwo);
            setTextFieldTwoValidationMessage("✔︎");
        }
    }

    // MARK: - Render HTML
	return (   
    	<TextFieldForm>
            <div>
    		<p>Why are these values important to you?</p>
                <ValidationMessage message={textFieldOneValidationMessage}/>
                <TextAreaInput
                    type='textarea'
                    name='promptone'
                    placeholder=' answer here'
                    onChange={hasChangedTextFieldOne}
                /><br />
            </div>
            <div>
                <p>What projects are you involved in?</p>
                <ValidationMessage message={textFieldTwoValidationMessage}/>
                <TextAreaInput
                    type='textarea'
                    name='promptwo'
                    placeholder=' answer here'
                    onChange={hasChangedTextFieldTwo}
                /><br />
            </div>
        </TextFieldForm>

	)
} 

export default TextFieldQuestions;