import React from "react";

const InicioLabores = () => {
	return (
		<>
			<div className="container mb-5 pb-5">
				<form>
					<h1 className="text-center mb-4">Formulario inicio de servicios</h1>
					<div className="form-row mb-3">
						<div className="col-md-6 col-sm-12">
							<label htmlFor="nombres">Nombres</label>
							<input type="text" className="form-control" placeholder="Nombres" />
						</div>
						<div className="col-md-6 col-sm-12">
							<label htmlFor="nombres">Apellidos</label>
							<input type="text" className="form-control" placeholder="Apellidos" />
						</div>
					</div>
					<div className="form-row mb-3">
						<div className="col-md-6 col-sm-12">
							<label htmlFor="nombres">Teléfono</label>
							<input type="tel" className="form-control" placeholder="+569 12345678" />
						</div>
						<div className="col-md-6 col-sm-12">
							<label htmlFor="nombres">Email</label>
							<input type="email" className="form-control" placeholder="example@example.com" />
						</div>
					</div>
					<div className="form-row mb-3">
						<div className="col-md-6 col-sm-12">
							<label htmlFor="nombres">Domicilio</label>
							<input type="text" className="form-control" placeholder="Ingresa tu dirección..." />
						</div>
						<div className="col-md-6 col-sm-12">
							<label htmlFor="nombres">Rut</label>
							<input type="text" className="form-control" placeholder="12345678-9" />
						</div>
					</div>
					<div className="form-row mb-3">
						<div className="col-md-6 col-sm-12">
							<label htmlFor="nombres">Fecha de nacimiento</label>
							<input type="date" className="form-control" placeholder="Ingresa tu dirección..." />
						</div>
						<div className="col-md-6 col-sm-12">
							<label htmlFor="nombres">Certificado de antecedentes</label>
							<input type="file" className="form-control" placeholder="" />
						</div>
					</div>
					<div className="form-row mb-3">
						<div className="col-md-6 col-sm-12">
							<label htmlFor="nombres">Fotocopia cédula de identidad</label>
							<input type="file" className="form-control" placeholder="Ingresa tu dirección..." />
						</div>
						<div className="col-md-6 col-sm-12">
							<label htmlFor="nombres">Certificado de domicilio</label>
							<input type="file" className="form-control" placeholder="" />
						</div>
					</div>
					<div className="form-row mb-3">
						<div className="col-md-6 col-sm-12">
							<label htmlFor="nombres">Certificado de previsión</label>
							<input type="file" className="form-control" placeholder="Ingresa tu dirección..." />
						</div>
						<div className="col-md-6 col-sm-12">
							<label htmlFor="nombres">Certificado de cotizaciones</label>
							<input type="file" className="form-control" placeholder="" />
						</div>
					</div>

					<div className="form-row">
						<div className="col-md-3">
							<label htmlFor="nombres">Desde:</label>
							<input type="time" className="form-control" placeholder="hola" />
						</div>
						<div className="col-md-3">
							<label htmlFor="nombres">hasta:</label>
							<input type="time" className="form-control" placeholder="hola" />
						</div>
						<div className="col-md-6">
							<label htmlFor="nombres">Días de preferencia</label>
							<input type="text" className="form-control" placeholder="lunes-martes-miercoles..." />
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
								<select name="banco">
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
								<select name="tipocuenta">
									<option value="" defaultValue="" />
									<option value="santander">cta corriente</option>
									<option value="chile">cta vista</option>
									<option value="bci">cta de ahorro</option>
								</select>
							</div>
							<div className="col-md-3 col-sm-12">
								<label className="d-block" htmlFor="numerocuenta">
									Numero de cuenta
								</label>
								<input type="text" />
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default InicioLabores;
