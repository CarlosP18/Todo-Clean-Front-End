import React from "react";
import "../../../styles/HperfilCliente.scss";
import { MisdatosCliente } from "./misdatoscliente";
import { SolicitudCliente } from "./solicitudescliente";
import { AgentePreferido } from "./agentepreferidocliente";
import { MsjCliente } from "./msjcliente";
import { useHistory } from "react-router-dom";
import Reserva from "../../views/reserva";
import { Pricing } from "../../views/pricing";

export const HperfilCliente = () => {
	let user = JSON.parse(localStorage.getItem("user-info"));
	const history = useHistory();
	function Logout() {
		localStorage.clear();
		history.push("/login");
		/* window.location.href = "/signin"; */
	}
	const storage = localStorage.getItem("session");
	let session = {
		name: "",
		last_name: ""
	};
	if (storage !== null) {
		const json = JSON.parse(storage);
		if (json.user) {
			session = json.user;
		}
	}
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
											<h4 className="m-t-10 m-b-5">
												{session.name} {session.last_name}
											</h4>
											<p className="m-b-10">Cliente</p>
											<a onClick={Logout} href="#" className="btn btn-sm btn-info mb-2">
												Logout
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
												Agendar nuevo servicio
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												id="profile-suscripciones-tab"
												data-toggle="tab"
												href="#profile-suscripciones"
												role="tab"
												aria-controls="profile-suscripciones"
												aria-selected="false">
												Suscripciones
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
					<div
						className="tab-pane fade"
						id="profile-suscripciones"
						role="tabpanel"
						aria-labelledby="profile-suscripciones-tab">
						<div className="col-12">
							<Pricing />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
