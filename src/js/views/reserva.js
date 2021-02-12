import React from "react";

const Reserva = () => {
	return (
		<>
			<div className="container rounded bg-white">
				<div className="row d-flex justify-content-center pb-5">
					<div className="col-sm-5 col-md-5 ml-1">
						<div className="py-4 d-flex flex-row">
							<h5>
								<b>Reserva</b>{" "}
							</h5>
						</div>
						<div className="form-check">
							<h5>Selecciona el tipo de vivienda:</h5>
							<input className="form-check-input" type="radio" name="vivienda" id="vivienda" />
							<label htmlFor="vivienda" className="form-check-label">
								<i className="fas fa-home" /> Casa
							</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio" name="vivienda" id="vivienda" />
							<label htmlFor="vivienda" className="form-check-label">
								<i className="fas fa-building" /> Departamento
							</label>
						</div>
						<hr />
						<div className="form-check mt-3">
							<h5>Selecciona el tipo de servicio:</h5>
							<input className="form-check-input" type="radio" name="servicio" id="servicio" />
							<label htmlFor="servicio" className="form-check-label">
								Opcion 1
							</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio" name="servicio" id="servicio" />
							<label htmlFor="vivienda" className="form-check-label">
								Opcion 2
							</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio" name="servicio" id="servicio" />
							<label htmlFor="vivienda" className="form-check-label">
								Opcion 3
							</label>
						</div>
						<hr />
						<div className="form-check mt-3">
							<h5>Ingresa número de habitaciones:</h5>
							<label htmlFor="habitaciones" className="form-check-label">
								<i className="fas fa-bed" />
							</label>
							<input
								style={{ border: "solid 1px", width: "15%", marginLeft: "10px", borderRadius: "4px" }}
								className="form-check-input"
								type="number"
								name="habitaciones"
								id="habitaciones"
							/>
						</div>
						<hr />
						<div className="form-check mt-3">
							<h5>Ingresa número de baños:</h5>
							<label htmlFor="baño" className="form-check-label">
								<i className="fas fa-bath" />
							</label>
							<input
								style={{ border: "solid 1px", width: "15%", marginLeft: "10px", borderRadius: "4px" }}
								className="form-check-input"
								type="number"
								name="baño"
								id="baño"
							/>
						</div>
						<hr />
						<div className="form-check mt-3">
							<h5>Selecciona servicios adicionales:</h5>
							<input className="form-check-input" type="radio" name="adicionales" id="adicionales" />
							<label htmlFor="adicionales" className="form-check-label">
								Opcion 1
							</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio" name="adicionales" id="adicionales" />
							<label htmlFor="adicionales" className="form-check-label">
								Opcion 2
							</label>
						</div>
						<hr />
						<div className="form-check">
							<label htmlFor="">
								<i className="far fa-calendar-alt" />
							</label>
							<input
								style={{ border: "solid 1px", width: "40%", marginLeft: "10px", borderRadius: "4px" }}
								type="date"
							/>
						</div>
					</div>
					<div className="col-sm-3 col-md-4 offset-md-1 mobile">
						<div className="py-4 d-flex justify-content-end" />
						<div className="bg-light rounded d-flex flex-column">
							<div className="p-2 ml-3">
								<h4>Resumen de la reserva</h4>
							</div>
							<div className="p-2 d-flex">
								<div className="col-8">Tipo de vivienda:</div>
								<div className="ml-auto">Casa</div>
							</div>
							<div className="p-2 d-flex">
								<div className="col-8">Servicio</div>
								<div className="ml-auto">Opcion 1</div>
							</div>
							<div className="p-2 d-flex">
								<div className="col-8">Habitaciones</div>
								<div className="ml-auto">3</div>
							</div>
							<div className="p-2 d-flex">
								<div className="col-8">Baños</div>
								<div className="ml-auto">5</div>
							</div>
							<div className="border-top px-4 mx-3"> </div>
							<div className="p-2 d-flex pt-3">
								<div className="col-8">Servicios adicionales</div>
								<div className="ml-auto">opcion 1</div>
							</div>
							<div className="p-2 d-flex">
								<div className="col-8">Maximum out-of-pocket on Insurance Policy (not reached)</div>
								<div className="ml-auto">$6500.00</div>
							</div>
							<div className="border-top px-4 mx-3" />
							<div className="p-2 d-flex pt-3">
								<div className="col-8">Insurance Responsibility</div>
								<div className="ml-auto">
									<b>$71.76</b>
								</div>
							</div>
							<div className="p-2 d-flex">
								<div className="col-8">
									Patient Balance <span className="fa fa-question-circle text-secondary" />
								</div>
								<div className="ml-auto">
									<b>$71.76</b>
								</div>
							</div>
							<div className="border-top px-4 mx-3" />
							<div className="p-2 d-flex pt-3">
								<div className="col-8">
									<b>Total</b>
								</div>
								<div className="ml-auto">
									<b className="green">$85.00</b>
								</div>
							</div>
							<button className="btn btn-primary btn-lg" type="submit">
								Luis eres el mejor
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Reserva;
