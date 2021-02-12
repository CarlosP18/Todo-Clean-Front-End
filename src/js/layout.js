import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Pricing } from "./views/pricing";
import { Signup } from "./views/signup";
import { Signin } from "./views/signin";
import { Calendar } from "./component/calendar";
import { Admin } from "./views/admin";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { Reserva } from "./views/reserva";

import { PerfilCliente } from "./views/perfilCliente";
import { PerfilTrabajor } from "./views/perfilTrabajador";
import { Ayuda } from "./views/ayuda";
import { Informe } from "./views/informe";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						{/* 	<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/pricing">
							<Pricing />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/login">
							<Signin />
						</Route>
						<Route exact path="/admin">
							<Admin />
						</Route> */}
						<Route>
							<PerfilTrabajor />
						</Route>
						{/* 						<Route>
							<Informe />
						</Route> */}
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
