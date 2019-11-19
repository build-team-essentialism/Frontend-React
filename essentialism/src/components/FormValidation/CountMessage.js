import React, { useState } from "react";
import styled from 'styled-components';

const CountDiv = styled.div`
	color: gray;
	margin-bottom: 1rem;
`;

function CountMessage(props) {

	const {message} = props

	const [visible, setVisible] = useState(true);

	return (
		<CountDiv isOpen={visible}>{message}/7</CountDiv>
	);
}

export default CountMessage;