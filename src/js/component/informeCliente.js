import React from "react";
const InformeC = () => {
	return (
		<>
			<div className="form-row">
				<div className="name">Email address</div>
				<div className="value">
					<div className="input-group">
						<input className="input--style-6" type="email" name="email" placeholder="example@email.com" />
					</div>
				</div>
			</div>

			<div className="col-md-6 mb-3 mt-2">
				<div className="card">
					<div className="card-body">
						<div className="d-flex flex-column align-items-center text-center">
							<img
								src="https://bootdey.com/img/Content/avatar/avatar7.png"
								alt="Admin"
								className="rounded-circle"
								width="150"
							/>
							<div className="mt-3">
								<h4>Nombre Cliente</h4>
								<p className="text-secondary mb-1">Dirección</p>
								<p className="text-muted font-size-sm">Servicio Comprado</p>
							</div>
							<button className="btn btn-secondary btn-sm">Seleccionar</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default InformeC;
