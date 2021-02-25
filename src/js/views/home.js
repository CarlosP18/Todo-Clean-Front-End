import React from "react";
import mainImg from "../../img/mainImg.jpg";
import logo7 from "../../img/logo7.png";
import "../../styles/home.scss";

export const Home = () => (
	<div
		id="containerHome"
		className="ml-2"
		style={{ width: "100%", backgroundColor: "white", padding: "0", margin: "0" }}>
		<div className="firstImg row justify-content-center " style={{ width: "100%", height: "60%" }}>
			<img
				className="img-fluid m-3 mt-5"
				src={logo7}
				style={{
					width: "50%"
				}}
			/>
		</div>
		<div className="row d-flex " style={{ width: "100%" }}>
			<section id="what-we-do" style={{ width: "100%" }}>
				<div className="container-fluid">
					<h2 className="section-title mb-2 h1">Qué Ofrecemos?</h2>
					<p className="text-center text-muted h5">
						Sabemos que a veces 24 horas no son suficientes. Únete a nuestra comunidad y simplifica tu día.
					</p>
					<div className="row mt-5">
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
							<div className="card">
								<div className="card-block block-1">
									<h3 className="card-title">Registro rápido</h3>
									<p className="card-text">
										Inscríbite de forma simple y disfruta de nuestros servicios.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
							<div className="card">
								<div className="card-block block-2">
									<h3 className="card-title">Limpieza de mantención</h3>
									<p className="card-text">Mantén tu hogar siempre limpio.</p>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
							<div className="card">
								<div className="card-block block-3">
									<h3 className="card-title">Planchado</h3>
									<p className="card-text">Tu ropa lista para usar.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
							<div className="card">
								<div className="card-block block-4">
									<h3 className="card-title">Limpieza de vidrio</h3>
									<p className="card-text">Tus vidrios siempre limpios y relucientes.</p>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
							<div className="card">
								<div className="card-block block-5">
									<h3 className="card-title">Elige la fecha que te acomode</h3>
									<p className="card-text">Obtén el servicios cuando lo necesites.</p>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
							<div className="card">
								<div className="card-block block-6">
									<h3 className="card-title">Pago por Paypal</h3>
									<p className="card-text">Rápido y seguro.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
);
