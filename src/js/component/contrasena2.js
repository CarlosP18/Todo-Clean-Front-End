import React from "react";
import { validateInfo } from "./validateinfo";
import useForm from "./useform";
import "../../styles/signup.scss";
import { Link } from "react-router-dom";

export const Contrasena2 = () => {
	const result = (mensaje, codigo, response) => {
		if (codigo === 200) {
			alert(mensaje);
			//redireccionar al login
		} else {
			alert("No fue posible registrar: " + mensaje);
		}
	};

	const { handleSubmit, handleChange, values, errors } = useForm(
		result,
		validateInfo,
		{
			name: "",
			last_name: "",
			rut: "",
			email: "",
			password: "",
			phone: ""
		},
		"/user/signup-trabajador", //colocar ruta aqui
		"POST"
	);

	return (
		<div className="container-fluid containerForm">
			<div className="signup-form ">
				<form onSubmit={handleSubmit} className="form" noValidate>
					<h2 className="text-center">Ingrese nueva contraseña</h2>
					<hr />
					<p>Minimo 8 caracteres</p>
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<span className="fa fa-user" />
								</span>
							</div>
							<input
								className="form-control"
								type="password"
								name="password"
								placeholder="ingresa contraseña"
								value={values.password}
								onChange={handleChange}
							/>
						</div>
						{errors.password && <h6 className="parrafo">{errors.password}</h6>}
					</div>
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<span className="fa fa-user" />
								</span>
							</div>
							<input
								className="form-control"
								type="password"
								name="password2"
								placeholder="confirma contraseña"
								value={values.password2}
								onChange={handleChange}
							/>
						</div>
						{errors.password2 && <h6 className="parrafo">{errors.password2}</h6>}
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
