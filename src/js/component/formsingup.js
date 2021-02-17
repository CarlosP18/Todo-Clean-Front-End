import React from "react";
import validate from "../component/validateinfo";
import useForm from "../component/useform";
import "../../styles/signup.scss";

const FormSignup = submitForm => {
	const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);

	return (
		<div className="container-fluid containerForm">
			<div className="signup-form ">
				<form onSubmit={handleSubmit} className="form" noValidate>
					<h2 className="text-center mb-4">Trabaja con nosotros!</h2>
					<hr />
					<div className="form-group mt-5">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<span className="fa fa-user" />
								</span>
							</div>
							<input
								className="form-control "
								type="text"
								name="username"
								placeholder="ingrese nombre"
								value={values.username}
								onChange={handleChange}
							/>
						</div>
						{errors.username && <p className="parrafo">{errors.username}</p>}
					</div>
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<span className="fa fa-user" />
								</span>
							</div>
							<input
								className="form-control "
								type="text"
								name="lastname"
								placeholder="ingrese apellido"
								value={values.lastname}
								onChange={handleChange}
							/>
						</div>
						{errors.lastname && <p className="parrafo">{errors.lastname}</p>}
					</div>
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<span className="far fa-id-card" />
								</span>
							</div>
							<input
								className="form-control "
								type="text"
								name="rut"
								placeholder="ingrese rut"
								value={values.rut}
								onChange={handleChange}
							/>
						</div>
						{errors.rut && <p className="parrafo">{errors.rut}</p>}
					</div>
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
									<span className="fas fa-mobile-alt" />
								</span>
							</div>
							<input
								className="form-control"
								type="texto"
								name="phone"
								placeholder="numero de telefono de 9 digitos"
								value={values.phone}
								onChange={handleChange}
							/>
						</div>
						{errors.phone && <p className="parrafo">{errors.phone}</p>}
					</div>
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
						{errors.password && <p className="parrafo">{errors.password}</p>}
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
						{errors.password2 && <p className="parrafo">{errors.password2}</p>}
					</div>
					<div className="form-group">
						<label className="form-check-label mt-4">
							<input type="checkbox" required="required" /> He leido y acepto los{" "}
							<a href="#">Terminos y condiciones</a>
						</label>
					</div>
					<div className="form-group d-flex justify-content-center">
						<button type="submit" className="btn btn-primary btn-lg">
							Registrar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormSignup;
