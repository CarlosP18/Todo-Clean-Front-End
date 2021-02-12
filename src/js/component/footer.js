import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const Footer = () => (
	<footer
		className="text-white ml-0 bg-dark"
		/* style={{ position: "fixed", padding: "10px 10px 0px 10px", bottom: "0", width: "100%" }} */
	>

	<footer className="text-white ml-0 bg-dark">

		<div className="row">
			<div className="col-md-3 ml-5">
				<Link className="navbar-brand float-left " to="/">
					<img src={logo} style={{ height: "3rem" }} alt="" loading="lazy" />
				</Link>
				<div className=" float-left mt-1">
					<Link to="/ayuda" style={{ textDecorationLine: "none" }}>
						<p className="mb-1 text-white">AYUDA</p>
					</Link>
					<Link to="/ayuda" style={{ textDecorationLine: "none" }}>
						<p className="mb-2 text-white">CONTACTO</p>
					</Link>
				</div>
			</div>
			<div className="col-md-4 mt-3 text-center">
				<p className="mb-1">© 2020 Copyright</p>
			</div>
			<div className="col-md-4 mt-3 text-right">
				<i className="far fa-envelope"> contacto@todoclean.cl</i>
			</div>
		</div>
	</footer>
);
