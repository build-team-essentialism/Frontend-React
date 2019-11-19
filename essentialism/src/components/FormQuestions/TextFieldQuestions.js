import React from "react";
import ValidationMessage from "../FormValidation/ValidationMessage";

function TextFieldQuestions(props) {

	const {messageForTextFieldOne, messageForTextFieldTwo} = props

	return (
		<div>
		<p>Why are these values important to you? Don't worry about spelling or grammar. This is for your eyes only.</p>
            <ValidationMessage message={messageForTextFieldOne}/>
            <input
                type='textarea'
                name='promptone'
                placeholder='answer here'
            /><br />
            <p>What projects are you involved in?</p>
            <ValidationMessage message={messageForTextFieldTwo}/>
            <input
                type='textarea'
                name='promptwo'
                placeholder='answer here'
            /><br />
        </div>

	)
} 

export default TextFieldQuestions;