import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { strategy } from "webpack-merge";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
				<div className="container-fluid">
					<Link className="navbar-brand ml-lg-5 ml-3 " to="/">
						<img src={logo} style={{ height: "3rem" }} alt="" loading="lazy" />
					</Link>

					<button
						className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold  text-white "
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<i className="fas fa-bars" />
					</button>
					<div className="collapse navbar-collapse mr-lg-5 mr-3" id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item py-3 mx-0 mx-lg-1">
								<Link className="text-white" to="/ayuda">
									<b>AYUDA!</b>
								</Link>
							</li>
							<li className="nav-item mx-0 mx-lg-1">
								<Link
									to="/login"
									className=" login-signup btn text-white my-2 "
									type="submit"
									style={{ backgroundColor: "#43DEBE" }}>
									<b>Login</b>
								</Link>
							</li>
							<li className="nav-item mx-0 mx-lg-1">
								<Link
									to="/signup"
									className=" login-signup btn text-white my-2 mr-2"
									type="submit"
									style={{ backgroundColor: "#43DEBE" }}>
									<b>Registrate</b>
								</Link>
							</li>
							<li className="nav-item mx-0  mx-lg-1 ">
								<Link
									to="/signuptrabajador"
									className=" login-signup btn text-white my-2 mr-0 "
									type="submit"
									style={{ backgroundColor: "#5E8998" }}>
									<b>Trabaja con Nosotros</b>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
