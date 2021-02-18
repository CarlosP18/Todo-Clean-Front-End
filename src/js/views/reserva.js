import React from "react";

const Reserva = () => {
	return (
		<>
			<div className="container bg-success rounded mb-5">
				<form action="">
					<div className="col-md-12 col-sm-12">
						<i className="far fa-user-circle float-right" />
					</div>
					<div className="col-md-12">
						<h1 className="text-center">Reserva</h1>
					</div>
					<div className="form-row" />
					<div className="form-row" />
					<div className="body d-flex">
						<div className="body-left col-md-6">
							<div className="form-row">
								<div className="col-md-12">
									<div className="form-group">
										<legend>Selecciona tipo de vivienda:</legend>
										<input type="radio" id="vivienda" name="vivienda" />
										<label htmlFor="vivienda">
											<i className="fas fa-home" /> Casa
										</label>
										<input type="radio" id="vivienda" name="vivienda" />
										<label htmlFor="vivienda">
											<i className="far fa-building" /> Departamento
										</label>
									</div>
								</div>
							</div>
							<div className="form-row">
								<div className="col-md-12">
									<div className="form-group">
										<legend>Selecciona tipo de servicio:</legend>
										<input type="radio" id="servicio" name="servicio" />
										<label htmlFor="servicio">Opción 1</label>
										<input type="radio" id="servicio" name="servicio" />
										<label htmlFor="servicio">Opción 2</label>
										<input type="radio" id="servicio" name="servicio" />
										<label htmlFor="servicio">Opción 3</label>
									</div>
								</div>
							</div>
							<div className="form-row">
								<div className="col-md-12">
									<div className="form-group">
										<legend>Selecciona el número de habitaciones y de baños:</legend>
										<label htmlFor="habitaciones">
											<i className="fas fa-bed" />
										</label>
										<select name="habitaciones" id="habitaciones">
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
										</select>
										<label htmlFor="baños">
											<i className="fas fa-toilet" />
										</label>
										<select name="baños" id="baños">
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
										</select>
									</div>
								</div>
							</div>
							<div className="form-row">
								<div className="col-md-12">
									<div className="form-group">
										<legend>Servicios adicionales:</legend>
										<input type="radio" id="adicionales" name="adicionales" />
										<label htmlFor="adicionales">Opción 1</label>
										<input type="radio" id="adicionales" name="adicionales" />
										<label htmlFor="adicionales">Opción 2</label>
										<input type="radio" id="adicionales" name="adicionales" />
										<label htmlFor="adicionales">Opción 3</label>
									</div>
								</div>
							</div>
							<div className="form-row">
								<div className="col-md-12">
									<div className="form-group">
										<legend>Elige una fecha para agendar tu reserva:</legend>
										<label htmlFor="fecha">
											<i className="far fa-calendar-alt" />
										</label>
										<input type="date" id="fecha" name="fecha" />
									</div>
								</div>
							</div>
						</div>
						<div className="body-right col-md-6 bg-danger">
							<h1 className="text-center">Resumen de la reserva</h1>
							<div className="form-row">
								<div className="col-md-12">
									<ul>
										<li>Tipo de vivienda:</li>
										<li>Servicio solicitado:</li>
										<li>Habitaciones: 3</li>
										<li>Baños: 2</li>
										<li>
											Servicios adicionales:
											<ul>
												<li>opcion 1</li>
												<li>opcion 2</li>
												<li>opcion 3</li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
							<hr />
							<div className="form-row">
								<div className="col">
									<h2>Subtotal: $21990</h2>
									<h2>Servicios adicionales: $5990</h2>
									<h2>Total: $27980</h2>
								</div>
							</div>
							<hr />
							<div className="form-row">
								<div className="col text-center">
									<button className="btn btn-primary">Agendar</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default Reserva;
