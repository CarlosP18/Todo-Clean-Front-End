import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import Reserva from "./views/reserva";
import InicioLabores from "./views/inicio de labores";

import { PerfilCliente } from "./views/perfilCliente";
import { PerfilTrabajor } from "./views/perfilTrabajador";
import {Ayuda} from "./views/ayuda";
import {Informe} from "./views/informe";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Navbar />

				<Reserva />
				<Switch>{/* 	<Route>
						<h1>Not found!</h1>
					</Route> */}</Switch>
				<Switch>
					<Route>
					<PerfilTrabajor />
           </Route>
          <Route>
					<Informe />
          </Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>

				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
