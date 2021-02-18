import { useState, useEffect, useContext } from "react";

const useForm = (callback, validate) => {
	const [values, setValues] = useState({
		name: "",
		last_name: "",
		rut: "",
		email: "",
		password: "",
		phone: ""
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = e => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};
	const submitUser = userinfo => {
		fetch("http://localhost:3000/user/signup", {
			method: "POST",
			body: JSON.stringify(userinfo),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => console.log("Success:", response))
			.catch(error => console.error("Error:", error));
	};
	const handleSubmit = e => {
		e.preventDefault();

		setErrors(validate(values));
		setIsSubmitting(true);
		submitUser(values);
	};

	useEffect(
		() => {
			if (Object.keys(errors).length === 0 && isSubmitting) {
				callback();
			}
		},
		[errors]
	);

	return { handleChange, handleSubmit, values, errors };
};

export default useForm;
