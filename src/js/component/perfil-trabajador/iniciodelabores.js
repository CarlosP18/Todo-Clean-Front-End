import React, { useState } from "react";
import { validateFormTrabajador } from "../../component/validateinfo";
import useForm from "../../component/useform";
import "../../../styles/iniciodelabores.scss";

const InicioLabores = submitForm => {
	const [disable, setDisable] = useState(true); // esto sirve para habilitar el editar
	const storage = localStorage.getItem("session"); //session es la informacion almacenada en la sesion del navegador
	let session = {
		//informacion contenida en el formulario
		id: 0,
		name: "",
		last_name: "",
		phone: "",
		email: "",
		rut: "",
		ciudad: "",
		address: "",
		comuna: "",
		nacimiento: "",
		bank: "",
		cuenta: "",
		numero_cuenta: ""
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
			alert("No fue posible registrar: " + mensaje);
		}
	};

	const { handleSubmit, handleChange, values, errors } = useForm(
		result, //funcion de  resultado del fetch(callback)
		validateFormTrabajador, // funcion de validacion
		session, //informacion por defecto del formulario
		"trabajador/formulario-inicio/" + session.id, //url del api
		"PUT" // metodo del api
	);

	return (
		<>
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className=" col-md-10 col-sm-12 col-xs-12">
						<div className="card  p-md-4 my-4  mx-md-0">
							<form onSubmit={handleSubmit} className="form" noValidate>
								<h1 className="text-center my-4 mx-4">Formulario inicio de servicios</h1>
								<div className="row">
									<div className="form group col-4 mb-3">
										<label className="ml-2">Nombre</label>
										<input
											className="form-control "
											type="text"
											name="name"
											placeholder="Nombre"
											readOnly={disable}
											value={values.name}
											onChange={handleChange}
										/>
										{errors.name && <h6 className="parrafo">{errors.name}</h6>}
									</div>
									<div className="form group col-4 mb-3">
										<label className="ml-2">Apellido</label>
										<input
											className="form-control "
											type="text"
											name="last_name"
											placeholder="Apellido"
											readOnly={disable}
											value={values.last_name}
											onChange={handleChange}
										/>
										{errors.last_name && <h6 className="parrafo">{errors.last_name}</h6>}
									</div>
									<div className="form group col-4 mb-3">
										<label className="ml-2">Teléfono</label>
										<input
											className="form-control"
											type="texto"
											name="phone"
											placeholder=""
											readOnly={disable}
											value={values.phone}
											onChange={handleChange}
										/>
										{errors.phone && <h6 className="parrafo">{errors.phone}</h6>}
									</div>
								</div>
								<div className="row">
									<div className="form group col-4 mb-3">
										<label className="ml-2">Email</label>
										<input
											className="form-control"
											type="email"
											name="email"
											placeholder="todoclean@gmail.com"
											readOnly={disable}
											value={values.email}
											onChange={handleChange}
										/>
										{errors.email && <h6 className="parrafo">{errors.email}</h6>}
									</div>
									<div className="form group col-4 mb-3">
										<label className="ml-2"> fecha de nacimiento</label>
										<input
											type="date"
											className="form-control"
											placeholder="fecha de nacimiento.."
											required
										/>
									</div>
									<div className="form group col-4 mb-3">
										<label className="ml-2">Rut</label>
										<input
											className="form-control "
											type="text"
											name="rut"
											placeholder="ingrese rut"
											readOnly={disable}
											value={values.rut}
											onChange={handleChange}
										/>
										{errors.rut && <h6 className="parrafo">{errors.rut}</h6>}
									</div>
								</div>
								<div className="row">
									<div className="form-group col-4 mb-3">
										<label className="ml-2">Ciudad</label>
										<input
											className="form-control"
											type="texto"
											name="ciudad"
											placeholder="Ciudad"
											readOnly={disable}
											value={values.ciudad}
											onChange={handleChange}
										/>
										{errors.ciudad && <h6 className="parrafo">{errors.ciudad}</h6>}
									</div>
									<div className="form-group  col-4 mb-3">
										<label className="ml-2">Comuna</label>
										<input
											className="form-control"
											type="texto"
											name="comuna"
											placeholder="Comuna"
											readOnly={disable}
											value={values.comuna}
											onChange={handleChange}
										/>
										{errors.comuna && <h6 className="parrafo">{errors.comuna}</h6>}
									</div>

									<div className="form-group  col-4 mb-3">
										<label className="ml-2">Direccion</label>
										<input
											className="form-control"
											type="texto"
											name="address"
											placeholder="Dirección"
											readOnly={disable}
											value={values.address}
											onChange={handleChange}
										/>
										{errors.address && <h6 className="parrafo">{errors.address}</h6>}
									</div>
								</div>
								{/* 					<div className="form-row mb-3">
						<div className="col-lg-4 col-lg-4 col-md-6 col-sm-12">
							<label htmlFor="nombres">Certificado de antecedentes</label>
							<input type="file" className="form-control" placeholder="" required />
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12">
							<label htmlFor="nombres">Fotocopia cédula de identidad</label>
							<input type="file" className="form-control" placeholder="" required />
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12">
							<label htmlFor="nombres">Certificado de domicilio</label>
							<input type="file" className="form-control" placeholder="" required />
						</div>
					</div>
					<div className="form-row mb-3">
						<div className="col-lg-6 col-md-6 col-sm-12">
							<label htmlFor="nombres">Certificado de previsión</label>
							<input type="file" className="form-control" placeholder="" required />
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12">
							<label htmlFor="nombres">Certificado de cotizaciones</label>
							<input type="file" className="form-control" placeholder="" required />
						</div>
					</div> */}
								{/* 								<div className="form-row">
									<div className="col-md-3">
										<label htmlFor="nombres">Desde:</label>
										<input type="time" className="form-control" placeholder="hola" required />
									</div>
									<div className="col-md-3">
										<label htmlFor="nombres">hasta:</label>
										<input type="time" className="form-control" placeholder="hola" required />
									</div>
									<div className="col-md-6">
										<label htmlFor="nombres">Días de preferencia</label>
										<input
											type="text"
											className="form-control"
											placeholder="lunes-martes-miercoles..."
											required
										/>
									</div>
								</div> */}
								<div className="container mt-1 mb-5">
									<div className="form-row">
										<div className="col">
											<h5 className="text-center">Forma de pago de servicios</h5>
										</div>
									</div>
									<div className="row mt-2">
										<div className="form-group col-4 mb-3">
											<label className="ml-2">Banco</label>
											<input
												className="form-control"
												type="texto"
												name="bank"
												placeholder="Santander"
												readOnly={disable}
												value={values.bank}
												onChange={handleChange}
											/>
											{errors.bank && <h6 className="parrafo">{errors.bank}</h6>}
										</div>
										<div className="form-group  col-4 mb-3">
											<label className="ml-2">Tipo de cuenta</label>
											<input
												className="form-control"
												type="texto"
												name="cuenta"
												placeholder="Cuenta corriente"
												readOnly={disable}
												value={values.cuenta}
												onChange={handleChange}
											/>
											{errors.cuenta && <h6 className="parrafo">{errors.cuenta}</h6>}
										</div>

										<div className="form-group  col-4 mb-3">
											<label className="ml-2">Nº de Cuenta</label>
											<input
												className="form-control"
												type="texto"
												name="numero_cuenta"
												placeholder="65424142"
												readOnly={disable}
												value={values.numero_cuenta}
												onChange={handleChange}
											/>
											{errors.numero_cuenta && (
												<h6 className="parrafo">{errors.numero_cuenta}</h6>
											)}
										</div>
									</div>
								</div>
								<div className="d-grid gap-2 col-6 mx-auto text-center">
									<button
										className="btn btn-primary"
										type="button"
										onClick={() => {
											setDisable(false);
										}}>
										EDITAR
									</button>
									<button className="btn btn-primary" type="submit">
										ENVIAR
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default InicioLabores;
