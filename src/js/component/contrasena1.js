import React, { useState } from "react";
import { validateInfo } from "./validateinfo";
import useForm from "./useform";
import "../../styles/signup.scss";
import { Link } from "react-router-dom";

export const Contrasena1 = () => {
	const result = (mensaje, codigo, response) => {
		if (codigo === 200) {
			alert(mensaje);
			//redireccionar al login
		} else {
			alert("No fue posible registrar: " + mensaje);
		}
	};

	const [email, setEmail] = useState("");
	const nuevaContraseña = email => {
		//setReserva({ ...reserva, total: total });
		fetch("http://localhost:4000/reset-password-request", {
			method: "POST",
			body: JSON.stringify(email),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => resp.json())
			.then(data => {
				console.log(data);
			});
	};

	/* 	const { handleSubmit, handleChange, values, errors } = useForm(
		result,

		{
			email: ""
		},
		"/reset-password-request", //colocar ruta aqui
		"POST"
	); */

	return (
		<div className="container-fluid containerForm">
			<div className="signup-form ">
				<form
					onSubmit={e => {
						e.preventDefault();
						nuevaContraseña(email);
					}}
					className="form"
					noValidate>
					<h2 className="text-center">Recupera tu contraseña!</h2>
					<hr />
					<p>Al ingresar tu email, se enviará un correo con un enlace para crear una nueva contraseña</p>

					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<span className="fa fa-paper-plane" />
								</span>
							</div>
							<input
								className="form-control"
								type="email"
								name="email"
								placeholder="ingrese email"
								onChange={e => {
									setEmail(e.target.value);
								}}
							/>
						</div>
						{/* {errors.email && <h6 className="parrafo">{errors.email}</h6>} */}
					</div>
					<div className="form-group d-flex justify-content-center">
						<button type="submit" className="btn btn-primary btn-lg">
							Enviar
						</button>
					</div>
					<div className="text-center mt-2">
						<p className="mb-0">¿No estas registrado?</p>
						<Link className="text-center mt-0" to="/signup">
							Registrate aqui!
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
