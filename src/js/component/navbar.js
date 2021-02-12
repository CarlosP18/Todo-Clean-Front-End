import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { strategy } from "webpack-merge";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar fixed-top navbar-dark bg-dark">
				<Link className="navbar-brand ml-lg-5 ml-3 " to="/">
					<img src={logo} style={{ height: "3rem" }} alt="" loading="lazy" />
				</Link>
				<div className="d-flex justify-content-end" id="navbarSupportedContent">
					<Link className="nav-link text-white" href="#">
						<b>AYUDA!</b>
					</Link>
					<Link
						to="/login"
						className=" login-signup btn text-white my-2 mx-2 my-sm-0"
						type="submit"
						style={{ backgroundColor: "#43DEBE" }}>
						<b>Login</b>
					</Link>
					<Link
						to="/signup"
						className=" login-signup btn text-white my-2 mr-5 my-sm-0"
						type="submit"
						style={{ backgroundColor: "#43DEBE" }}>
						<b>Registrate</b>
					</Link>
				</div>
			</nav>
		</>
	);
};
