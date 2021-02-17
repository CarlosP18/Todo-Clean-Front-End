import React from "react";
import validate from "../component/validateinfo";
import useForm from "../component/useform";
import "../../styles/signup.scss";
import { Link } from "react-router-dom";

export const Signin = submitForm => {
	const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);

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
						{errors.email && <p className="parrafo">{errors.email}</p>}
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
						{errors.password && <p className="parrafo">{errors.password}</p>}
					</div>
					<div className="form-group" style={{ marginLeft: "100px" }}>
						<label className="form-check-label mt-4">
							<input type="checkbox" required="required" /> Recordar usurario
						</label>
					</div>
					<div className="text-center mb-2">
						<Link className="text-center" to="">
							¿Olvidaste tu contraseña?
						</Link>
					</div>
					<div className="form-group d-flex justify-content-center">
						<button type="submit" className="btn btn-primary btn-lg">
							Ingresar
						</button>
					</div>
					<div className="text-center mt-5">
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
