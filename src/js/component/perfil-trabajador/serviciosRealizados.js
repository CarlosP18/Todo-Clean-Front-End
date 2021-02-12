import React from "react";
import "../../../styles/solicitudcliente.scss";

export const ServiciosRealizados = () => {
	return (
		<>
			<div className="container-solicitud">
				<div className="row">
					<div className="col-md-12">
						<h4>Registro de Servicios</h4>
						<div className="table-responsive">
							<table id="mytable" className="table table-bordred table-striped">
								<thead>
									<th>
										<input type="checkbox" id="checkall" />
									</th>
									<th>Tipo de subscripcion</th>
									<th>fecha</th>
									<th>nombre de cliente</th>
									<th>Monto</th>
									<th>trabajo realiazo</th>
									<th>cancelar solicidud</th>
								</thead>
								<tbody>
									<tr>
										<td>
											<input type="checkbox" className="checkthis" />
										</td>
										<td>Premium</td>
										<td>03/12/2018</td>
										<td>Rosita Nieves</td>
										<td>$40.000</td>
										<td>
											<p data-placement="top" data-toggle="tooltip" title="Edit">
												<button
													className="btn btn-primary btn-xs"
													data-title="Edit"
													data-toggle="modal"
													data-target="#edit">
													<span className="glyphicon glyphicon-pencil" />
													<i className="fas fa-check" />
												</button>
											</p>
										</td>
										<td>
											<p data-placement="top" data-toggle="tooltip" title="Delete">
												<button
													className="btn btn-danger btn-xs"
													data-title="Delete"
													data-toggle="modal"
													data-target="#delete">
													<span className="glyphicon glyphicon-trash" />
													<i className="fas fa-trash-alt" />
												</button>
											</p>
										</td>
									</tr>
									<tr>
										<td>
											<input type="checkbox" className="checkthis" />
										</td>
										<td>Premium</td>
										<td>03/12/2018</td>
										<td>Rosita Nieves</td>
										<td>$40.000</td>
										<td>
											<p data-placement="top" data-toggle="tooltip" title="Edit">
												<button
													className="btn btn-primary btn-xs"
													data-title="Edit"
													data-toggle="modal"
													data-target="#edit">
													<span className="glyphicon glyphicon-pencil" />
													<i className="fas fa-check" />
												</button>
											</p>
										</td>
										<td>
											<p data-placement="top" data-toggle="tooltip" title="Delete">
												<button
													className="btn btn-danger btn-xs"
													data-title="Delete"
													data-toggle="modal"
													data-target="#delete">
													<span className="glyphicon glyphicon-trash" />
													<i className="fas fa-trash-alt" />
												</button>
											</p>
										</td>
									</tr>
									<tr>
										<td>
											<input type="checkbox" className="checkthis" />
										</td>
										<td>Premium</td>
										<td>03/12/2018</td>
										<td>Rosita Nieves</td>
										<td>$40.000</td>
										<td>
											<p data-placement="top" data-toggle="tooltip" title="Edit">
												<button
													className="btn btn-primary btn-xs"
													data-title="Edit"
													data-toggle="modal"
													data-target="#edit">
													<span className="glyphicon glyphicon-pencil" />
													<i className="fas fa-check" />
												</button>
											</p>
										</td>
										<td>
											<p data-placement="top" data-toggle="tooltip" title="Delete">
												<button
													className="btn btn-danger btn-xs"
													data-title="Delete"
													data-toggle="modal"
													data-target="#delete">
													<span className="glyphicon glyphicon-trash" />
													<i className="fas fa-trash-alt" />
												</button>
											</p>
										</td>
									</tr>
									<tr>
										<td>
											<input type="checkbox" className="checkthis" />
										</td>
										<td>Premium</td>
										<td>03/12/2018</td>
										<td>Rosita Nieves</td>

										<td>$40.000</td>
										<td>
											<p data-placement="top" data-toggle="tooltip" title="Edit">
												<button
													className="btn btn-primary btn-xs"
													data-title="Edit"
													data-toggle="modal"
													data-target="#edit">
													<span className="glyphicon glyphicon-pencil" />
													<i className="fas fa-check" />
												</button>
											</p>
										</td>
										<td>
											<p data-placement="top" data-toggle="tooltip" title="Delete">
												<button
													className="btn btn-danger btn-xs"
													data-title="Delete"
													data-toggle="modal"
													data-target="#delete">
													<span className="glyphicon glyphicon-trash" />
													<i className="fas fa-trash-alt" />
												</button>
											</p>
										</td>
									</tr>
									<tr>
										<td>
											<input type="checkbox" className="checkthis" />
										</td>
										<td>Premium</td>
										<td>03/12/2018</td>
										<td>Rosita Nieves</td>
										<td>$40.000</td>
										<td>
											<p data-placement="top" data-toggle="tooltip" title="Edit">
												<button
													className="btn btn-primary btn-xs"
													data-title="Edit"
													data-toggle="modal"
													data-target="#edit">
													<span className="glyphicon glyphicon-pencil" />
													<i className="fas fa-check" />
												</button>
											</p>
										</td>
										<td>
											<p data-placement="top" data-toggle="tooltip" title="Delete">
												<button
													className="btn btn-danger btn-xs"
													data-title="Delete"
													data-toggle="modal"
													data-target="#delete">
													<span className="glyphicon glyphicon-trash" />
													<i className="fas fa-trash-alt" />
												</button>
											</p>
										</td>
									</tr>
								</tbody>
							</table>
							<div className="clearfix" />
							<ul className="pagination pull-right">
								<li className="disabled">
									<a href="#">
										<span className="glyphicon glyphicon-chevron-left" />
									</a>
								</li>
								<li className="active">
									<a href="#">1</a>
								</li>
								<li>
									<a href="#">2</a>
								</li>
								<li>
									<a href="#">3</a>
								</li>
								<li>
									<a href="#">4</a>
								</li>
								<li>
									<a href="#">5</a>
								</li>
								<li>
									<a href="#">
										<span className="glyphicon glyphicon-chevron-right" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="modal fade" id="edit" tabIndex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-hidden="true">
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
							<button type="button" className="btn btn-warning btn-lg" style={{ width: " 100%" }}>
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
							<button type="button" className="close" data-dismiss="modal" aria-hidden="true">
								<span className="glyphicon glyphicon-remove" aria-hidden="true" />
							</button>
							<h4 className="modal-title custom_align" id="Heading">
								Delete this entry
							</h4>
						</div>
						<div className="modal-body">
							<div className="alert alert-danger">
								<span className="glyphicon glyphicon-warning-sign" /> Are you sure you want to delete
								this Record?
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
		</>
	);
};
