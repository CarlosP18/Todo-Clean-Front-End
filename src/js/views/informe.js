import React from "react";
import InformeC from "../component/informeCliente";
import InformeT from "../component/informetrabajador";
import "../../styles/informe.scss";

const Informe = () => {
	return (
		<>
			<div className="fondo_informe">
				<div className="container emp-profile">
					<form method="post">
						<div className="row">
							<div className="col-md-4">
								<div className="profile-img">
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
										alt=""
									/>
									<div className="file btn btn-primary">
										<i className="fas fa-edit" />
										<input type="file" name="file" />
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="profile-head">
									<h5>Nombre Trabajador</h5>
									<h6>Descripción</h6>
									<p className="proile-rating">
										CALIFICACIÓN : <span>8/10</span>
									</p>
									<ul className="nav nav-tabs" id="myTab" role="tablist">
										<li className="nav-item">
											<a
												className="nav-link active"
												id="home-tab"
												data-toggle="tab"
												href="#home"
												role="tab"
												aria-controls="home"
												aria-selected="true">
												Nuevo Informe
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												id="profile-tab"
												data-toggle="tab"
												href="#profile"
												role="tab"
												aria-controls="profile"
												aria-selected="false">
												Cliente Asociado
											</a>
										</li>
									</ul>
								</div>
							</div>
							{/* <div className="col-md-2">
							<input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
						</div> */}
						</div>
						<div className="row">
							<div className="col-md-4">
								<div className="profile-work">
									<p>INFORMES ANTERIORES</p>
									<a href="">Argomedo 11</a>
									<br />
									<a href="">Portugal 207</a>
									<br />
									<a href="">Los Pinares de Maipú</a>
									<p>INFORMES PENDIENTES</p>
									<a href="">0</a>
								</div>
							</div>
							<div className="col-md-8">
								<div className="tab-content profile-tab" id="myTabContent">
									<div
										className="tab-pane fade show active"
										id="home"
										role="tabpanel"
										aria-labelledby="home-tab">
										{/*  XXX */}
										<InformeT />
										{/*  XXX */}
									</div>
									<div
										className="tab-pane fade"
										id="profile"
										role="tabpanel"
										aria-labelledby="profile-tab">
										{/*  XXX */}
										<InformeC />
										{/*  XXX */}
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default Informe;
