import React, { useState } from "react";
import "../../styles/form.scss";
import FormSignup from "../component/formsingup";
import FormSuccess from "../component/formsucces";

const Form = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}
	return <>{!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}</>;
};

export default Form;
