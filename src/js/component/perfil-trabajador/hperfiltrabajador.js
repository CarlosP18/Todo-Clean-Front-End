import React from "react";
import "../../../styles/HperfilCliente.scss";
import { ServiciosRealizados } from "./serviciosRealizados";
import { MsjTrabajador } from "./msgtrabajador";
import { Calendar } from "../calendar";
import InicioLabores from "./iniciodelabores";
import Informe from "../../views/informe";

export const HperfilTrabajador = () => {
	return (
		<>
			<div className="container2">
				<div className="row">
					<div className="col-md-12">
						<div id="content" className="content content-full-width">
							<div className="profile">
								<div className="profile-header">
									<div className="profile-header-cover" />

									<div className="profile-header-content">
										<div className="profile-header-img">
											<img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
										</div>

										<div className="profile-header-info">
											<h4 className="m-t-10 m-b-5">Denisse Rozenthal</h4>
											<p className="m-b-10">Trabajador</p>
											<a href="#" className="btn btn-sm btn-info mb-2">
												ver más
											</a>
										</div>
									</div>
									<ul className="profile-header-tab nav nav-tabs" id="mytab" role="tablist">
										<li className="nav-item">
											<a
												className="nav-link"
												id="profile-formulario-tab"
												data-toggle="tab"
												href="#profile-formulario"
												role="tab"
												aria-controls="profile-formulario"
												aria-selected="true">
												Formulario de registro
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												id="profile-agenda-tab"
												data-toggle="tab"
												href="#profile-agenda"
												role="tab"
												aria-controls="profile-agenda"
												aria-selected="false">
												Mi agenda
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												id="profile-servicio-tab"
												data-toggle="tab"
												href="#profile-servicio"
												role="tab"
												aria-controls="profile-servicio"
												aria-selected="false">
												Servicios Realizados
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												id="profile-informe-tab"
												data-toggle="tab"
												href="#profile-informe"
												role="tab"
												aria-controls="profile-informe"
												aria-selected="false">
												Crear Nuevo Informe
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												id="profile-msg-tab"
												data-toggle="tab"
												href="#profile-msg"
												role="tab"
												aria-controls="profile-msg"
												aria-selected="false">
												Msg Directos Clientes
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tab-content profile-tab" id="myTabContent">
					<div
						className="tab-pane fade show active"
						id="profile-formulario"
						role="tabpanel"
						aria-labelledby="profile-formulario-tab">
						<div className="col-12">
							<InicioLabores />
						</div>
					</div>
					<div
						className="tab-pane fade"
						id="profile-agenda"
						role="tabpanel"
						aria-labelledby="profile-agenda-tab">
						<div className="col-12">
							<Calendar />
						</div>
					</div>
					<div
						className="tab-pane fade"
						id="profile-servicio"
						role="tabpanel"
						aria-labelledby="profile-servicio-tab">
						<div className="col-12">
							<ServiciosRealizados />
						</div>
					</div>
					<div
						className="tab-pane fade"
						id="profile-informe"
						role="tabpanel"
						aria-labelledby="profile-informe-tab">
						<div className="col-12">
							<Informe />
						</div>
					</div>
					<div className="tab-pane fade" id="profile-msg" role="tabpanel" aria-labelledby="profile-msg-tab">
						<div className="col-12">
							<MsjTrabajador />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
