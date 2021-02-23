import { useState, useEffect } from "react";

const useForm = (callback, validate, datos, endpoint, method, setAuth = null) => {
	const [values, setValues] = useState(datos); //valores de los formularios
	const [errors, setErrors] = useState({}); //erroes de validacion en el caso que existan
	const [isSubmitting, setIsSubmitting] = useState(false); //estado de envios de formularios, si el formulario se esta enviadno quedaria en tru

	const handleChange = e => {
		//cuando cambia el valor de input se cambia a values
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};

	const submit = info => {
		//envio de formulario api
		const session = localStorage.getItem("session"); //lectura de session del navegador que queda guardado en el chrome no en el servidor
		let token = "";
		if (session) {
			token = JSON.parse(session).access_token; //lectura de token desde la sesion
		}
		fetch("http://localhost:4000/" + endpoint, {
			// conexion con api
			method, // metodo que se ejecutara en el api (post, get, put, delete)
			body: info ? JSON.stringify(info) : undefined, // informacion que se enviara a la api
			//seguridad y tipo de dato transmitido a la api
			headers:
				token !== "" // si hay un token lo coloca como autenticacion
					? {
							"Content-Type": "application/json",
							Authorization: "bearer " + token
					  }
					: {
							"Content-Type": "application/json"
					  }
		})
			.then(async res => {
				return {
					// respuesta de la api
					response: res,
					json: await res.json() // conversion de json en respuesta del api
				};
			})
			.then(res => {
				// si tiene que guardar sesion, se debe utilizar los sguientes endpoints
				if (endpoint === "user/signup" || endpoint === "user/signin" || endpoint === "user/signup-trabajador") {
					if (parseInt(res.response.status) === 200) {
						setAuth(true);
						localStorage.setItem("session", JSON.stringify(res.json)); //almacena json en sesion
					}
				}
				callback(res.json.message ? res.json.message : "Listo", parseInt(res.response.status), res.json); //se responde resultado de fetch
			})
			.catch(error => {
				// se retornan errores
				console.error("Error:", error);
				callback(error.toString(), 500, error);
			});
	};

	const handleSubmit = e => {
		// enviar formulario al apretar enviar y valida los campos
		e.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};

	useEffect(
		() => {
			if (Object.keys(errors).length === 0 && isSubmitting) {
				submit(values); //si no hay errores envia formulario al api
			}
		},
		[errors]
	);

	return { handleChange, handleSubmit, values, errors };
};

export default useForm;
