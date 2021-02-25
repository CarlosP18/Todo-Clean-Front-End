import React from "react";
import "../../../styles/solicitudcliente.scss";

export const SolicitudCliente = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-10 col-md-10 col-sm-12">
						<div className="card p-4 p-md-4 my-4 mx-3 mx-md-0">
							<div className="container-solicitud">
								<div className="row">
									<div className="col-md-12">
										<h4>Registro de Solicitudes</h4>
										<div className="table-responsive">
											<table id="mytable" className="table table-bordred table-striped">
												<thead>
													<th>Servicio</th>
													<th>Fecha</th>
													<th>Nombre de agente</th>
													<th>Monto</th>
												</thead>
												<tbody>
													<tr>
														<td>Limpieza Mantencion</td>
														<td>01/04/2021</td>
														<td>Jose Perez</td>
														<td>$36.000</td>
													</tr>
												</tbody>
											</table>
											<div className="clearfix" />
										</div>
									</div>
								</div>
							</div>
							<div
								className="modal fade"
								id="edit"
								tabIndex="-1"
								role="dialog"
								aria-labelledby="edit"
								aria-hidden="true">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<button
												type="button"
												className="close"
												data-dismiss="modal"
												aria-hidden="true">
												<span className="glyphicon glyphicon-remove" aria-hidden="true" />
											</button>
											<h4 className="modal-title custom_align" id="Heading">
												Edit Your Detail
											</h4>
										</div>
										<div className="modal-body">
											<div className="form-group">
												<input className="form-control " type="text" placeholder="Mohsin" />
											</div>
											<div className="form-group">
												<input className="form-control " type="text" placeholder="Irshad" />
											</div>
											<div className="form-group">
												<textarea
													rows="2"
													className="form-control"
													placeholder="CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan"
												/>
											</div>
										</div>
										<div className="modal-footer ">
											<button
												type="button"
												className="btn btn-warning btn-lg"
												style={{ width: " 100%" }}>
												<span className="glyphicon glyphicon-ok-sign" />
												 Update
											</button>
										</div>
									</div>
								</div>
							</div>
							<div
								className="modal fade"
								id="delete"
								tabIndex="-1"
								role="dialog"
								aria-labelledby="edit"
								aria-hidden="true">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<button
												type="button"
												className="close"
												data-dismiss="modal"
												aria-hidden="true">
												<span className="glyphicon glyphicon-remove" aria-hidden="true" />
											</button>
											<h4 className="modal-title custom_align" id="Heading">
												Delete this entry
											</h4>
										</div>
										<div className="modal-body">
											<div className="alert alert-danger">
												<span className="glyphicon glyphicon-warning-sign" /> Are you sure you
												want to delete this Record?
											</div>
										</div>
										<div className="modal-footer ">
											<button type="button" className="btn btn-success">
												<span className="glyphicon glyphicon-ok-sign" />
												 Yes
											</button>
											<button type="button" className="btn btn-default" data-dismiss="modal">
												<span className="glyphicon glyphicon-remove" />
												 No
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
