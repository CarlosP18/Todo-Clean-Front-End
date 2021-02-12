import React from "react";
import Modal from "../component/modal";
import "../../styles/ayuda.scss";
const Ayuda = () => {
	return (
		<>
			<div className="fondo_ayuda">
				<div className="container">
					<div className="row align-items-center my-5">
						<div className="col-lg-7">
							<img
								className="img-fluid rounded mb-4 mb-lg-0"
								src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
								alt=""
							/>
						</div>

						<div className="col-lg-5">
							<h1 className="font-weight-light titulo_ayuda">Nuestra Historia</h1>
							<p className="nuestra_historia">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industrys standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book. It has survived not
								only five centuries, but also the leap into electronic typesetting, remaining
								essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
								when an unknown printer took a galley of type and scrambled it to make a type specimen
								book. It has survived not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</p>
							<button
								type="button"
								className="btn btn_ayuda"
								data-toggle="modal"
								data-target="#exampleModal">
								Contáctanos!
							</button>
							<Modal />
						</div>
					</div>
					{/* <!-- i.row 1--- > */}
					<div className="row">
						<div className="col-6">
							<div className="accordion" id="accordionExample">
								<div className="card">
									<div className="card-header cont_ayuda" id="headingOne">
										<h2 className="mb-0">
											<button
												className="btn font-weight-light color_ayuda"
												type="button"
												data-toggle="collapse"
												data-target="#collapseOne"
												/* aria-expanded="true" */
												aria-controls="collapseOne">
												Servicios
											</button>
										</h2>
									</div>

									<div
										id="collapseOne"
										className="collapse show"
										aria-labelledby="headingOne"
										data-parent="#accordionExample">
										<div className="card-body nuestra_historia">
											<p>Limpieza de Mantención</p>
											<p>Planchado</p>
											<p>Limpieza de Vidrios</p>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header cont_ayuda" id="headingTwo">
										<h2 className="mb-0">
											<button
												className="btn collapsed font-weight-light color_ayuda"
												type="button"
												data-toggle="collapse"
												data-target="#collapseTwo"
												/* aria-expanded="false" */
												aria-controls="collapseTwo">
												Limpieza de Mantención
											</button>
										</h2>
									</div>
									<div
										id="collapseTwo"
										className="collapse"
										aria-labelledby="headingTwo"
										data-parent="#accordionExample">
										<div className="card-body nuestra_historia">
											<p>
												<strong>Cocina: </strong>
												Limpieza de lavaplatos, interior de microondas, mesones, superficie de
												los muebles. Limpieza externa de aparatos eléctricos como el
												refrigerador, horno, otros. Se considera aspirar y trapear.
											</p>
											<p>
												<strong>Baños: </strong>
												Limpieza de la ducha, tina, lavamanos, inodoro, espejos y superficies de
												los muebles. Se considera aspirar y trapear.
											</p>
											<p>
												<strong>Habitaciones: </strong>
												Hacer la cama, cambiar sábanas (si el cliente lo estima), doblar la
												ropa, limpieza de los muebles y superficies visibles. Se considera
												aspirar y trapear.
											</p>
											<p>
												<strong>
													Living-comedor, loggia, pasillos, escaleras y/o terraza:{" "}
												</strong>
												Limpieza de los muebles y superficies visibles. Se considera aspirar y
												trapear.
											</p>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header cont_ayuda" id="headingThree">
										<h2 className="mb-0">
											<button
												className="btn collapsed font-weight-light color_ayuda"
												type="button"
												data-toggle="collapse"
												data-target="#collapseThree"
												/* aria-expanded="false" */
												aria-controls="collapseThree">
												Planchado
											</button>
										</h2>
									</div>
									<div
										id="collapseThree"
										className="collapse"
										aria-labelledby="headingThree"
										data-parent="#accordionExample">
										<div className="card-body nuestra_historia">
											<p>Se realiza planchado durante 1 hora.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- col 2--- > */}
						<div className="col-6">
							<div className="accordion" id="accordionExample">
								<div className="card">
									<div className="card-header cont_ayuda" id="headingFour">
										<h2 className="mb-0">
											<button
												className="btn font-weight-light color_ayuda"
												type="button"
												data-toggle="collapse"
												data-target="#collapseFour"
												/* aria-expanded="true" */
												aria-controls="collapseFour">
												Limpieza de Vidrios
											</button>
										</h2>
									</div>

									<div
										id="collapseFour"
										className="collapse show"
										aria-labelledby="headingFour"
										data-parent="#accordionExample">
										<div className="card-body nuestra_historia">
											<p>
												Se limpian los vidrios que dan al interior y los que dan al exterior
												también siempre que no tengan riesgo de caída.
											</p>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header cont_ayuda" id="headingFive">
										<h2 className="mb-0">
											<button
												className="btn collapsed font-weight-light color_ayuda"
												type="button"
												data-toggle="collapse"
												data-target="#collapseFive"
												/* aria-expanded="false" */
												aria-controls="collapseFive">
												Nuestras Tarifas
											</button>
										</h2>
									</div>
									<div
										id="collapseFive"
										className="collapse"
										aria-labelledby="headingFive"
										data-parent="#accordionExample">
										<div className="card-body nuestra_historia">
											<p>
												Los valores varían según la cantidad de dormitorios y baños de cada casa
												o departamento.
											</p>
											<p>
												Al registrarte en www.todoclean.cl ingresas a tu perfil y podrás ver
												todos nuestros servicios y valores.
											</p>
											<p>
												<strong>Limpieza de Mantención</strong>
												<p>Depto. 1 dormitorio y 1 baños $20.000</p>
												<p>Depto. 2 dormitorio y 2 baños $21.000</p>
												<p>Depto. 3 dormitorios y 2 baños $23.000</p>
												<p>Casa 1 dormitorio y 1 baños $20.000</p>
												<p>Casa 2 dormitorios y 2 baños $24.000</p>
												<p>Casa 3 dormitorios y 2 baños $26.000</p>
												<strong>Limpieza de Vidrios</strong>
												<p>
													Departamento de hasta 3 dormitorios y 3 baños el valor es de
													$30.000.
												</p>
												<p>Casa de hasta 3 dormitorios y 3 baños el valor es de $35.000.</p>
												<strong>Servicio de Planchado (4hrs.)</strong>
												<p>El valor es de $24.000.</p>
											</p>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header cont_ayuda" id="headingSix">
										<h2 className="mb-0">
											<button
												className="btn collapsed font-weight-light color_ayuda"
												type="button"
												data-toggle="collapse"
												data-target="#collapseSix"
												/* aria-expanded="false" */
												aria-controls="collapseSix">
												Como cancelar un servicio
											</button>
										</h2>
									</div>
									<div
										id="collapseSix"
										className="collapse"
										aria-labelledby="headingSix"
										data-parent="#accordionExample">
										<div className="card-body nuestra_historia">
											<p>
												Se puede cancelar la fecha y hora con al menos 24 horas de anticipación
												de la hora establecida que comienza el servicio. Con menos de ese tiempo
												se registrará como servicio realizado y no se devolverá el dinero. En el
												caso que se cancele el servicio con más de 24 horas de antelación, el
												reverso se realizará durante los siguientes 5 días descontando la
												comisión de PayPal.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- f.row --- > */}
					</div>
					<h1 className="mt-4 mb-3 font-weight-light titulo_ayuda">Preguntas Frecuentes</h1>
					{/* <!-- i.row2 --- > */}
					<div className="mb-4" id="accordion" role="tablist" aria-multiselectable="true">
						<div className="card">
							<div className="card-header color_pregunta" role="tab" id="headingSeven">
								<h5 className="mb-0 font-weight-light">
									<a
										className="tex_pregunta"
										data-toggle="collapse"
										data-parent="#accordion"
										href="#collapseSeven"
										/* aria-expanded="true" */
										aria-controls="collapseSeven">
										¿Como puedo agendar un servicio en TODO CLEAN?
									</a>
								</h5>
							</div>

							<div
								id="collapseSeven"
								className="collapse show"
								role="tabpanel"
								aria-labelledby="headingSeven">
								<div className="card-body nuestra_historia">
									Debes registrarte como cliente en nuestra plataforma e ingresar a tu perfil para
									realizar reservas.
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header color_pregunta" role="tab" id="headingEight">
								<h5 className="mb-0 font-weight-light">
									<a
										className="collapsed tex_pregunta"
										data-toggle="collapse"
										data-parent="#accordion"
										href="#collapseEight"
										/* aria-expanded="false" */
										aria-controls="collapseEight">
										¿En que comunas está disponible el servicios de TODO CLEAN?
									</a>
								</h5>
							</div>
							<div id="collapseEight" className="collapse" role="tabpanel" aria-labelledby="headingEight">
								<div className="card-body nuestra_historia">
									TODO CLEAN se encuentra disponible para todas las comunas de la Región
									Metropolitana. ¡Pronto estaremos llegando a más regiones del país!.
								</div>
							</div>
						</div>
						<div className="card text-decoration-none ">
							<div className="card-header color_pregunta" role="tab" id="headingNine">
								<h5 className="mb-0 font-weight-light">
									<a
										className="collapsed tex_pregunta"
										data-toggle="collapse"
										data-parent="#accordion"
										href="#collapseNine"
										/* aria-expanded="false" */
										aria-controls="collapseNine">
										¿Como se les paga a los trabajadores del servicio?
									</a>
								</h5>
							</div>
							<div id="collapseNine" className="collapse" role="tabpanel" aria-labelledby="headingNine">
								<div className="card-body nuestra_historia">
									Nuestra plataforma actúa como intermediario entre los «Clientes» y los
									«Trabajadores», el valor de los servicios es fijo y a estos se les carga una
									comisión por nuestra intervención, lo demás es pagado a cada trabajador de forma
									quincenal a sus cuentas personales.
								</div>
							</div>
						</div>
					</div>

					{/* <!-- f.row --- > */}
				</div>
			</div>
		</>
	);
};
export default Ayuda;
