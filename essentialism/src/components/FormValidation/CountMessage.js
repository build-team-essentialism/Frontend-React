import React, { useState } from "react";
import styled from 'styled-components';

const CountDiv = styled.div`
	color: gray;
	margin-bottom: 1rem;
`;

function CountMessage(props) {

	const {currentCount, max} = props;

	return (
		<CountDiv>{currentCount}/{max}</CountDiv>
	);
}

export default CountMessage;