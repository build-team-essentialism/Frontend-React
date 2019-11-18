import React, { useState } from "react";
import { Alert } from "reactstrap";

const ErrorMessage = (props) => {

	const [visible, setVisible] = useState(false);

	const onDismiss = () => setVisible(false);

	return (
		<Alert color="warning">This is a warning alert - check it out!</Alert>
	);
}

export default ErrorMessage;