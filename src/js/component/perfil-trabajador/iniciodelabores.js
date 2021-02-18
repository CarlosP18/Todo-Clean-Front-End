import React from "react";
import validate from "../../component/validateinfo";
import useForm from "../../component/useform";
import "../../../styles/iniciodelabores.scss";

const InicioLabores = submitForm => {
	const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);
	return (
		<>
			<div className="container-labores mb-5 pb-5" style={{ borderRadius: "10px" }}>
				<form onSubmit={handleSubmit} className="form" noValidate>
					<h1 className="text-center mb-4">Formulario inicio de servicios</h1>
					<div className="form-row mb-3">
						<div className="col-lg-4 col-md-6 col-sm-12 mb-5">
							<label htmlFor="nombres">Nombre</label>
							<input
								className="form-control "
								type="text"
								name="username"
								placeholder="Nombre"
								value={values.username}
								onChange={handleChange}
							/>
							{errors.username && <h6 className="parrafo">{errors.username}</h6>}
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 mb-5">
							<label htmlFor="nombres">Apellido</label>
							<input
								className="form-control "
								type="text"
								name="lastname"
								placeholder="Apellido"
								value={values.lastname}
								onChange={handleChange}
							/>
							{errors.lastname && <h6 className="parrafo">{errors.lastname}</h6>}
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12 mb-5">
							<label htmlFor="nombres">Teléfono</label>
							<input
								className="form-control"
								type="texto"
								name="phone"
								placeholder=""
								value={values.phone}
								onChange={handleChange}
							/>
							{errors.phone && <h6 className="parrafo">{errors.phone}</h6>}
						</div>
					</div>
					<div className="form-row mb-3">
						<div className="col-lg-4 col-md-6 col-sm-12">
							<label htmlFor="nombres">Email</label>
							<input
								className="form-control"
								type="email"
								name="email"
								placeholder="todoclean@gmail.com"
								value={values.email}
								onChange={handleChange}
							/>
							{errors.email && <h6 className="parrafo">{errors.email}</h6>}
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12">
							<label htmlFor="nombres">Fecha de nacimiento</label>
							<input type="date" className="form-control" placeholder="fecha de nacimiento.." required />
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12">
							<label htmlFor="nombres">Rut</label>
							<input
								className="form-control "
								type="text"
								name="rut"
								placeholder="ingrese rut"
								value={values.rut}
								onChange={handleChange}
							/>
							{errors.rut && <p className="parrafo">{errors.rut}</p>}
						</div>
					</div>
					<div className="form-row mb-3">
						<div className="form-group col-4 ">
							<label>Ciudad</label>
							<input
								className="form-control"
								type="texto"
								name="city"
								placeholder="Ciudad"
								value={values.city}
								onChange={handleChange}
							/>
							{errors.city && <h6 className="parrafo">{errors.city}</h6>}
						</div>
						<div className="form-group  col-4 ">
							<label>Direccion</label>
							<input
								className="form-control"
								type="texto"
								name="address"
								placeholder=""
								value={values.address}
								onChange={handleChange}
							/>
							{errors.address && <h6 className="parrafo">{errors.address}</h6>}
						</div>
						<div className="form-group col-lg-4 ">
							<select
								id="inputState"
								placeholder="Ciudad"
								clasName="form-select"
								name="state"
								style={{ height: "35px", marginTop: "34px" }}>
								<option selected>Seleccione Comuna</option>
								<option value="Algo">Santiago Centro</option>
								<option value="Algo">Providencia</option>
								<option value="Algo">La Reina</option>
								<option value="Algo">lampa</option>
								<option value="Algo">Chillan</option>
								<option value="Algo">Maipu</option>
							</select>
						</div>
					</div>
					<div className="form-row mb-3">
						<div className="col-lg-4 col-lg-4 col-md-6 col-sm-12">
							<label htmlFor="nombres">Certificado de antecedentes</label>
							<input type="file" className="form-control" placeholder="" required />
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12">
							<label htmlFor="nombres">Fotocopia cédula de identidad</label>
							<input type="file" className="form-control" placeholder="" required />
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12">
							<label htmlFor="nombres">Certificado de domicilio</label>
							<input type="file" className="form-control" placeholder="" required />
						</div>
					</div>
					<div className="form-row mb-3">
						<div className="col-lg-6 col-md-6 col-sm-12">
							<label htmlFor="nombres">Certificado de previsión</label>
							<input type="file" className="form-control" placeholder="" required />
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12">
							<label htmlFor="nombres">Certificado de cotizaciones</label>
							<input type="file" className="form-control" placeholder="" required />
						</div>
					</div>
					<div className="form-row">
						<div className="col-md-3">
							<label htmlFor="nombres">Desde:</label>
							<input type="time" className="form-control" placeholder="hola" required />
						</div>
						<div className="col-md-3">
							<label htmlFor="nombres">hasta:</label>
							<input type="time" className="form-control" placeholder="hola" required />
						</div>
						<div className="col-md-6">
							<label htmlFor="nombres">Días de preferencia</label>
							<input
								type="text"
								className="form-control"
								placeholder="lunes-martes-miercoles..."
								required
							/>
						</div>
					</div>
					<div className="container mt-5 border border-dark rounded py-3">
						<div className="form-row">
							<div className="col">
								<h2 className="text-center">Forma de pago de servicios</h2>
							</div>
						</div>
						<div className="form-row d-flex my-3 pb-3 justify-content-sm-center">
							<div className="col-md-3 col-sm-12">
								<label className="d-block" htmlFor="banco">
									Banco
								</label>
								<select name="banco" style={{ height: "35px" }}>
									<option value="" defaultValue="" />
									<option value="santander">Santander</option>
									<option value="chile">Chile</option>
									<option value="bci">BCI</option>
								</select>
							</div>
							<div className="col-md-3 col-sm-12">
								<label className="d-block" htmlFor="tipocuenta">
									Tipo de cuenta
								</label>
								<select name="tipocuenta" style={{ height: "35px" }}>
									<option value="" defaultValue="" />
									<option value="santander">cta corriente</option>
									<option value="chile">cta vista</option>
									<option value="bci">cta de ahorro</option>
								</select>
							</div>
							<div className="col-md-3 col-sm-12">
								<label htmlFor="nombres">Numero de cuenta</label>
								<input type="text" className="form-control" placeholder="xxxxx" />
							</div>
						</div>
					</div>
					<div className="d-grid gap-2 col-6 mx-auto text-center">
						<button className="btn btn-primary" type="button">
							GUARDAR
						</button>
						<button className="btn btn-primary" type="button">
							EDITAR
						</button>
						<button className="btn btn-primary" type="submit">
							ENVIAR
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default InicioLabores;
