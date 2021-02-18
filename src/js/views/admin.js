import React from "react";
import mainImg from "../../img/mainImg.jpeg";
import logo from "../../img/logo.png";
import icon1 from "../../img/icon1.png";
import icon2 from "../../img/icon2.png";
import icon3 from "../../img/icon3.png";
import "../../styles/pricing.scss";

export const Admin = () => (
	<div
		className=" fixed-left col-md-2 float-left pb-4 mb-5  mr-0 mt-5 "
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
					<a className="nav-link text-white" href="#introduction">
						NUEVAS SOLICITUDES <i className="float-right fas fa-folder-open" />
					</a>
				</li>
				<li className="nav-item border-bottom mt-4 border-dark ">
					<a className="nav-link text-white" href="#alredy_know">
						LISTADO TRABAJADORES <i className="float-right  fas fa-id-card" />
					</a>
				</li>
				<li className="nav-item border-bottom my-4 mt-5 border-dark">
					<a className="nav-link text-white" href="#javascript_java">
						NOTIFICACIONES <i className="float-right fas fa-comment-alt" />
					</a>
				</li>
				<li className="nav-item border-bottom my-4 border-dark">
					<a className="nav-link text-white" href="#javascript_java">
						AGENDAS <i className="float-right fas fa-calendar-alt" />
					</a>
				</li>
				<li className="nav-item border-bottom my-4 border-dark">
					<a className="nav-link text-white" href="#hello-world">
						TRANSFERENCIAS <i className="float-right fab fa-cc-paypal" />
					</a>
				</li>
				<li className="nav-item border-bottom my-4 border-dark">
					<a className="nav-link text-white" href="#hello-world">
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
					<a className="nav-link text-white" href="#Variables">
						LISTADO DE CLIENTES <i className="float-right fas fa-user" />
					</a>
				</li>
				<li className="nav-item border-bottom my-4 border-dark">
					<a className="nav-link text-white" href="#Declaring_variables">
						NOTIFICACIONES <i className="float-right fas fa-comment-alt" />
					</a>
				</li>
				<li className="nav-item my-4 border-bottom border-dark">
					<a className="nav-link text-white" href="#Variable_scope">
						REGISTRO DE PAGOS <i className="float-right fas fa-money-check-alt" />
					</a>
				</li>
			</ul>
		</div>
	</div>
);
