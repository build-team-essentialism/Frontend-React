import React, { useState } from "react";
import styled from 'styled-components';

const ErrorDiv = styled.div`
	background-color: red;
	color: white;
	margin-bottom: 1rem;
`;

function ErrorMessage(props) {

	const {message} = props

	const [visible, setVisible] = useState(false);

	return (
		<ErrorDiv isOpen={visible}>{message}</ErrorDiv>
	);
}

export default ErrorMessage;