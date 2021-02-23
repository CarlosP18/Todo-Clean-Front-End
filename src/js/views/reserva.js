import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Paypal } from "../component/Paypal";
import "../../styles/reserva.scss";

const Reserva = () => {
	const [checkout, setCheckout] = useState(false);
	const [service, setService] = useState("");
	const [rooms, setRooms] = useState("");
	const [baths, setBaths] = useState("");
	const [date, setDate] = useState("");
	const { store } = useContext(Context);
	const [serviceIsSel, setServiceIsSel] = useState(false);
	const [roomIsSel, setRoomIsSel] = useState(false);
	const [bathIsSel, setBathIsSel] = useState(false);
	const [dateIsSel, setDateIsSel] = useState(false);
	let hExtra = store.precios.habitacionExtra;
	let bExtra = store.precios.banoExtra;
	let mantencion = store.precios.mantencion;
	let planchado = store.precios.planchado;
	let vidrios = store.precios.vidrios;

	let total =
		(parseInt(baths) - 1) * bExtra +
		(parseInt(rooms) - 1) * hExtra +
		(service === "Limpieza de mantencion" ? mantencion : service === "Limpieza de vidrios" ? vidrios : "");

	//// METODO POST ////
	const storage = localStorage.getItem("session"); //session es la informacion almacenada en la sesion del navegador
	let session = {
		//informacion contenida en el formulario
		id: 0,
		ciudad: "",
		address: "",
		comuna: ""
	};
	if (storage !== null) {
		const json = JSON.parse(storage);
		if (json.user) {
			session = json.user;
			//si existe  informacion del usuario se precargan en los datos
		}
	}
	const result = (mensaje, codigo, response) => {
		//resultado del fetch del useforme
		if (codigo === 200) {
			alert(mensaje);
		} else {
			alert("No fue posible reservar: " + mensaje);
		}
	};

	const [reserva, setReserva] = useState({
		valor: parseInt(total), ///ESTO NO FUNCIONA
		users_id: session.id,
		ciudad: session.ciudad,
		address: session.address,
		comuna: session.comuna
	});
	const crearReserva = reserva => {
		//setReserva({ ...reserva, total: total });
		fetch("http://localhost:4000/user/reserva", {
			method: "POST",
			body: JSON.stringify(reserva),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => resp.json())
			.then(data => {
				console.log(data);
				setCheckout(true);
			});
	};

	/* 	const handleChange = e => {
		//cuando cambia el valor de input se cambia a values
		setReserva({
			...reserva,
			[e.target.name]: e.target.value
		});
	}; */

	return (
		<>
			<form
				onSubmit={e => {
					e.preventDefault();
					crearReserva(reserva);
				}}>
				<div
					className="container rounded bg-white"
					id="reservaMain"
					style={{ marginTop: "30px", marginBottom: "30px", border: "solid 1px #3bc5aa" }}>
					<div className="row d-flex justify-content-center pb-5">
						<div className="col-sm-5 col-md-5 ml-1">
							<div className="py-4 d-flex flex-row">
								<h5>
									<b>Reserva</b>{" "}
								</h5>
							</div>
							<hr />
							<div className="form-check mt-3">
								<h5>Selecciona el tipo de servicio:</h5>
								<label htmlFor="tipo_servicio" className="form-check-label">
									<i className="fas fa-concierge-bell" />
								</label>
								<select
									name="tipo_servicio"
									value={service}
									className="form-select form-select-sm text-center"
									aria-label=".form-select-sm example"
									style={{
										border: "solid 1px",
										width: "auto",
										marginLeft: "10px",
										borderRadius: "4px"
									}}
									onChange={e => {
										setService(e.target.value);
										setServiceIsSel(true);
										setReserva({
											...reserva,
											[e.target.name]: e.target.value
										});
									}}>
									<option selected />
									<option value="Limpieza de mantencion">Limpieza de mantencion</option>
									<option value="Planchado">Planchado</option>
									<option value="Limpieza de Vidrios">Limpieza de Vidrios</option>
								</select>
							</div>
							<hr />
							{(serviceIsSel && service === "Limpieza de mantencion") ||
							service === "Limpieza de vidrios" ? (
								<div className="form-check mt-3">
									<h5>Ingresa número de habitaciones:</h5>
									<label htmlFor="num_habitaciones" className="form-check-label">
										<i className="fas fa-bed" />
									</label>
									<select
										name="num_habitaciones"
										value={rooms}
										className="form-select form-select-sm text-center"
										aria-label=".form-select-sm example"
										style={{
											border: "solid 1px",
											width: "15%",
											marginLeft: "10px",
											borderRadius: "4px"
										}}
										onChange={e => {
											setRooms(e.target.value);
											setRoomIsSel(true);
											setReserva({
												...reserva,
												[e.target.name]: e.target.value
											});
										}}>
										<option selected />
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
									</select>
								</div>
							) : (
								<>
									<hr />

									<div className="form-check">
										<label htmlFor="fecha_parareserva">
											<i className="far fa-calendar-alt" />
										</label>
										<input
											name="fecha_parareserva"
											style={{
												border: "solid 1px",
												width: "40%",
												marginLeft: "10px",
												borderRadius: "4px"
											}}
											type="date"
											onChange={e => {
												setDate(e.target.value);
												setDateIsSel(true);
												setReserva({
													...reserva,
													[e.target.name]: e.target.value
												});
											}}
										/>
									</div>
								</>
							)}
							{roomIsSel ? (
								<>
									<hr />
									<div className="form-check mt-3">
										<h5>Ingresa número de baños:</h5>
										<label htmlFor="num_banios" className="form-check-label">
											<i className="fas fa-bath" />
										</label>
										<select
											name="num_banios"
											value={baths}
											className="form-select form-select-sm text-center"
											aria-label=".form-select-sm example"
											style={{
												border: "solid 1px",
												width: "15%",
												marginLeft: "10px",
												borderRadius: "4px"
											}}
											onChange={e => {
												setBaths(e.target.value);
												setBathIsSel(true);
												setReserva({
													...reserva,
													[e.target.name]: e.target.value
												});
											}}>
											<option selected />
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
										</select>
									</div>
								</>
							) : (
								""
							)}
							{bathIsSel ? (
								<>
									<hr />

									<div className="form-check">
										<label htmlFor="fecha_parareserva">
											<i className="far fa-calendar-alt" />
										</label>
										<input
											name="fecha_parareserva"
											style={{
												border: "solid 1px",
												width: "40%",
												marginLeft: "10px",
												borderRadius: "4px"
											}}
											type="date"
											onChange={e => {
												setDate(e.target.value);
												setDateIsSel(true);
												setReserva({
													...reserva,
													[e.target.name]: e.target.value
												});
											}}
										/>
									</div>
								</>
							) : (
								""
							)}
						</div>
						<div className="col-sm-3 col-md-4 offset-md-1 mobile">
							<div className="py-4 d-flex justify-content-end" />
							<div className="bg-light rounded d-flex flex-column">
								<div className="p-2 ml-3">
									<h4>Resumen de la reserva</h4>
								</div>
								{serviceIsSel ? (
									<div className="p-2 d-flex">
										<div className="col-8">Servicio</div>
										<div className="ml-auto">{service}</div>
									</div>
								) : (
									""
								)}
								{roomIsSel ? (
									<div className="p-2 d-flex">
										<div className="col-8">Habitaciones</div>
										<div className="ml-auto">{rooms}</div>
									</div>
								) : (
									""
								)}
								{bathIsSel ? (
									<div className="p-2 d-flex">
										<div className="col-8">Baños</div>
										<div className="ml-auto">{baths}</div>
									</div>
								) : (
									""
								)}
								{dateIsSel ? (
									<>
										<div className="border-top px-4 mx-3"> </div>
										<div className="p-2 d-flex">
											<div className="col-8">Fecha del servicio</div>
											<div className="ml-auto">
												<b>{date}</b>
											</div>
										</div>
										<div className="border-top px-4 mx-3" />
										<div className="p-2 d-flex pt-3">
											<div className="col-8">
												<b>Total</b>
											</div>
											<div className="ml-auto">
												<b className="green">
													$
													{service === "Limpieza de mantencion" ||
													service === "Limpieza de vidrios"
														? total
														: planchado}
												</b>
											</div>
										</div>
									</>
								) : (
									""
								)}
								{checkout ? (
									<Paypal />
								) : (
									<button
										className="btn btn-primary btn-lg mt-5"
										type="submit"
										onClick={() => setReserva({ ...reserva, valor: total })}>
										Reservar y Pagar
									</button>
								)}{" "}
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default Reserva;
