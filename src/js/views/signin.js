import React, { useContext } from "react";
import { validateLogin } from "../component/validateinfo";
import useForm from "../component/useform";
import "../../styles/signup.scss";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signin = () => {
	const history = useHistory();
	const result = (mensaje, codigo, json) => {
		if (codigo === 200) {
			alert("Bienvenido " + json.user.name);
			if (json.user.rol_id === 2) {
				history.push("/trabajador");
			} else if (json.user.rol_id == 1) {
				history.push("/cliente");
			}
		} else {
			alert("No fue posible registrar: " + mensaje);
		}
	};
	const {
		actions: { setAuth }
	} = useContext(Context);

	const { handleSubmit, handleChange, values, errors } = useForm(
		result,
		validateLogin,
		{
			email: "",
			password: ""
		},
		"user/signin",
		"POST",
		setAuth
	);

	return (
		<div className="container-fluid containerForm">
			<div className="signup-form ">
				<form onSubmit={handleSubmit} className="form" noValidate>
					<h2 className="text-center mb-4">Ingresa</h2>
					<hr />
					<div className="form-group mt-5">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-paper-plane" />
								</span>
							</div>
							<input
								className="form-control"
								type="email"
								name="email"
								placeholder="ingrese email"
								value={values.email}
								onChange={handleChange}
							/>
						</div>
						{errors.email && <h6 className="parrafo">{errors.email}</h6>}
					</div>

					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-lock" />
								</span>
							</div>
							<input
								className="form-control"
								type="password"
								name="password"
								placeholder="confirma contraseña"
								value={values.password}
								onChange={handleChange}
							/>
						</div>
						{errors.password && <h6 className="parrafo">{errors.password}</h6>}
					</div>
					{/* 					<div className="form-group" style={{ marginLeft: "100px" }}>
						<label className="form-check-label mt-4">
							<input type="checkbox" required="required" /> Recordar usurario
						</label>
					</div> */}
					<div className="text-center  mt-4">
						<Link className="text-center" to="/contraseña1">
							¿Olvidaste tu contraseña?
						</Link>
					</div>
					<div className="form-group d-flex justify-content-center">
						<button type="submit" className="btn btn-primary btn-lg">
							Ingresar
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
