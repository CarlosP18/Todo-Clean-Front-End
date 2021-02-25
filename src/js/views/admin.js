import React from "react";
import mainImg from "../../img/mainImg.jpg";
import logo from "../../img/logo.png";
import InicioLabores from "../component/perfil-trabajador/iniciodelabores";
import "../../styles/pricing.scss";

export const Admin = () => (
	<>
		<div className="row">
			<div
				className=" fixed-left col-md-2 float-left pb-4 mb-5  mr-0 "
				style={{ border: "solid 1px black", backgroundColor: "#3bc5aa" }}>
				<div className="">
					<div className="border-bottom border-dark mt-5 py-3">
						<h3 style={{ "font-size": "1.6rem" }}>
							<span className="pr-2" />
							TRABAJADORES
						</h3>
					</div>
					<ul className="nav flex-column ">
						<li className="nav-item border-bottom my-4 mt-5 text-white border-dark">
							<a className="nav-link text-white" href="#">
								NUEVAS SOLICITUDES <i className="float-right fas fa-folder-open" />
							</a>
						</li>
						<li className="nav-item border-bottom mt-4 border-dark ">
							<a className="nav-link text-white" href="#">
								LISTADO TRABAJADORES <i className="float-right  fas fa-id-card" />
							</a>
						</li>
						<li className="nav-item border-bottom my-4 mt-5 border-dark">
							<a className="nav-link text-white" href="#">
								NOTIFICACIONES <i className="float-right fas fa-comment-alt" />
							</a>
						</li>
						<li className="nav-item border-bottom my-4 border-dark">
							<a className="nav-link text-white" href="#">
								AGENDAS <i className="float-right fas fa-calendar-alt" />
							</a>
						</li>
						<li className="nav-item border-bottom my-4 border-dark">
							<a className="nav-link text-white" href="#hello-world">
								TRANSFERENCIAS <i className="float-right fab fa-cc-paypal" />
							</a>
						</li>
						<li className="nav-item border-bottom my-4 border-dark">
							<a className="nav-link text-white" href="#">
								RESGITRO DE PAGOS <i className="float-right fas fa-money-check-alt" />
							</a>
						</li>
						<div className="border-bottom border-dark py-3">
							<h3 style={{ "font-size": "1.6rem" }}>
								<span className="pr-2" />
								CLIENTE
							</h3>
						</div>
						<li className="nav-item border-bottom my-4 mt-5 border-dark">
							<a className="nav-link text-white" href="#">
								LISTADO DE CLIENTES <i className="float-right fas fa-user" />
							</a>
						</li>
						<li className="nav-item border-bottom my-4 border-dark">
							<a className="nav-link text-white" href="#">
								NOTIFICACIONES <i className="float-right fas fa-comment-alt" />
							</a>
						</li>
						<li className="nav-item my-4 border-bottom border-dark">
							<a className="nav-link text-white" href="#">
								REGISTRO DE PAGOS <i className="float-right fas fa-money-check-alt" />
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="col-md-9 mt-2 ">
				<InicioLabores />
				<div className="row mt-0 justify-content-center">
					<div className="btn-group mb-4">
						<a href="#" className="btn btn-danger">
							Rechazar
						</a>
						<a href="#" className="btn btn-success">
							aceptar
						</a>
					</div>
				</div>
			</div>
		</div>
	</>
);
