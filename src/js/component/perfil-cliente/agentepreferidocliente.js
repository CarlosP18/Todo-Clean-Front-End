import React from "react";
import "../../../styles/agentepreferidocliente.scss";

export const AgentePreferido = () => {
	return (
		<>
			<section className="our-webcoderskull padding-lg">
				<div className="container">
					<div className="row heading heading-icon">
						<h2>Tus Agentes Preferidos</h2>
					</div>
					<ul className="row">
						<li className="col-12 col-md-6 col-lg-3">
							<div className="cnt-block equal-hight" style={{ height: "349px" }}>
								<figure>
									<img
										src="http://www.webcoderskull.com/img/team4.png"
										className="img-responsive"
										alt=""
									/>
								</figure>
								<h3>
									<a href="http://www.webcoderskull.com/">Carlos</a>
								</h3>
								<p>limpiando tu casita</p>
								<ul className="follow-us clearfix">
									<li>
										<a href="#">
											<i className="fa fa-facebook" aria-hidden="true" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-twitter" aria-hidden="true" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-linkedin" aria-hidden="true" />
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li className="col-12 col-md-6 col-lg-3">
							<div className="cnt-block equal-hight" style={{ height: "349px" }}>
								<figure>
									<img
										src="http://www.webcoderskull.com/img/team1.png"
										className="img-responsive"
										alt=""
									/>
								</figure>
								<h3>
									<a href="#">Miguel</a>
								</h3>
								<p>impeke tu casita</p>
								<ul className="follow-us clearfix">
									<li>
										<a href="#">
											<i className="fa fa-facebook" aria-hidden="true" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-twitter" aria-hidden="true" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-linkedin" aria-hidden="true" />
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li className="col-12 col-md-6 col-lg-3">
							<div className="cnt-block equal-hight" style={{ height: "349px" }}>
								<figure>
									<img
										src="http://www.webcoderskull.com/img/team4.png"
										className="img-responsive"
										alt=""
									/>
								</figure>
								<h3>
									<a href="http://www.webcoderskull.com/">Claudia </a>
								</h3>
								<p>Agente super limpieza</p>
								<ul className="follow-us clearfix">
									<li>
										<a href="#">
											<i className="fa fa-facebook" aria-hidden="true" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-twitter" aria-hidden="true" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-linkedin" aria-hidden="true" />
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li className="col-12 col-md-6 col-lg-3">
							<div className="cnt-block equal-hight" style={{ height: "349px" }}>
								<figure>
									<img
										src="http://www.webcoderskull.com/img/team2.png"
										className="img-responsive"
										alt=""
									/>
								</figure>
								<h3>
									<a href="http://www.webcoderskull.com/">Vannia </a>
								</h3>
								<p>A su orden</p>
								<ul className="follow-us clearfix">
									<li>
										<a href="#">
											<i className="fa fa-facebook" aria-hidden="true" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-twitter" aria-hidden="true" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-linkedin" aria-hidden="true" />
										</a>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};
