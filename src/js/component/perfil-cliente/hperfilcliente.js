import React from "react";
import "../../../styles/HperfilCliente.scss";
import { MisdatosCliente } from "./misdatoscliente";
import { SolicitudCliente } from "./solicitudescliente";
import { AgentePreferido } from "./agentepreferidocliente";
import { MsjCliente } from "./msjcliente";
import Reserva from "../../views/reserva";

export const HperfilCliente = () => {
	return (
		<>
			<div className="container">
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
											<h4 className="m-t-10 m-b-5">Monica de las nieves</h4>
											<p className="m-b-10">Cliente</p>
											<a href="#" className="btn btn-sm btn-info mb-2">
												editar perfil
											</a>
										</div>
									</div>
									<ul className="profile-header-tab nav nav-tabs" id="mytab" role="tablist">
										<li className="nav-item">
											<a
												className="nav-link"
												id="profile-about-tab"
												data-toggle="tab"
												href="#profile-about"
												role="tab"
												aria-controls="profile-about"
												aria-selected="true">
												Mis Datos
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												id="profile-solicitud-tab"
												data-toggle="tab"
												href="#profile-solicitud"
												role="tab"
												aria-controls="profile-solicitud"
												aria-selected="false">
												Mis Solicitudes
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												id="profile-agente-tab"
												data-toggle="tab"
												href="#profile-agente"
												role="tab"
												aria-controls="profile-agente"
												aria-selected="false">
												Agentes preferidos
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
												Msg Directos Agentes
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												id="profile-reserva-tab"
												data-toggle="tab"
												href="#profile-reserva"
												role="tab"
												aria-controls="profile-reserva"
												aria-selected="false">
												Agenda servicio
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
						id="profile-about"
						role="tabpanel"
						aria-labelledby="profile-about-tab">
						<div className="col-12">
							<MisdatosCliente />
						</div>
					</div>
					<div
						className="tab-pane fade"
						id="profile-solicitud"
						role="tabpanel"
						aria-labelledby="profile-solicitud-tab">
						<div className="col-12">
							<SolicitudCliente />
						</div>
					</div>
					<div
						className="tab-pane fade"
						id="profile-agente"
						role="tabpanel"
						aria-labelledby="profile-agente-tab">
						<div className="col-12" />
						<AgentePreferido />
					</div>
					<div className="tab-pane fade" id="profile-msg" role="tabpanel" aria-labelledby="profile-msg-tab">
						<div className="col-12" />
						<MsjCliente />
					</div>
					<div
						className="tab-pane fade"
						id="profile-reserva"
						role="tabpanel"
						aria-labelledby="profile-reserva-tab">
						<div className="col-12">
							<Reserva />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
