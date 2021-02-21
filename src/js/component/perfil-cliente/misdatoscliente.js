import React from "react";
import { validateForm } from "../../component/validateinfo";
import useForm from "../../component/useform";
import "../../../styles/msjcliente.scss";

export const MisdatosCliente = submitForm => {
	const result = (mensaje, codigo, response) => {
		if (codigo === 200) {
			alert(mensaje);
			//redireccionar al login
		} else {
			alert("No fue posible registrar: " + mensaje);
		}
	};

	const { handleSubmit, handleChange, values, errors } = useForm(
		result,
		validateForm,
		{
			name: "",
			last_name: "",
			rut: "",
			email: "",
			password: "",
			phone: "",
			city: "",
			address: "",
			comuna: ""
		},
		"", //colocar ruta aqui
		"PUT" //para actualizar datos
	);

	return (
		<>
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-12 col-md-6 col-sm-12 col-xs-12">
						<div className="card p-4 p-md-4 my-4 mx-3 mx-md-0">
							<h6>Mis Datos</h6>
							<p>Edita aqui tus datos</p>
							<form onSubmit={handleSubmit} className="form" noValidate>
								<div className="row">
									<div className="form-group col-6">
										<label> Nombre </label>
										<input
											className="form-control "
											type="text"
											name="name"
											placeholder=""
											value={values.name}
											onChange={handleChange}
										/>
										{errors.name && <h6 className="parrafo">{errors.name}</h6>}
									</div>
									<div className="form-group col-6">
										<label> Apellido</label>
										<input
											className="form-control "
											type="text"
											name="last_name"
											placeholder=""
											value={values.last_name}
											onChange={handleChange}
										/>
										{errors.last_name && <h6 className="parrafo">{errors.last_name}</h6>}
									</div>
								</div>
								<div className="row">
									<div className="form-group col-6">
										<label> Email </label>
										<input
											className="form-control"
											type="email"
											name="email"
											placeholder=""
											value={values.email}
											onChange={handleChange}
										/>
										{errors.email && <h6 className="parrafo">{errors.email}</h6>}
									</div>

									<div className="form-group col-6">
										<label> Telefono </label>
										<input
											className="form-control"
											type="texto"
											name="phone"
											placeholder=""
											value={values.phone}
											onChange={handleChange}
										/>
										{errors.phone && <h6 className="parrafo">{errors.phone}</h6>}
									</div>
								</div>
								<div className="form-group row">
									<div className="form-group col-4">
										<label> Ciudad</label>
										<input
											className="form-control"
											type="texto"
											name="ciudad"
											placeholder=""
											value={values.ciudad}
											onChange={handleChange}
										/>
										{errors.ciudad && <h6 className="parrafo">{errors.ciudad}</h6>}
									</div>
									<div className="form-group col-lg-4 ">
										<label> Comuna</label>
										<input
											className="form-control"
											type="texto"
											name="comuna"
											placeholder=""
											value={values.comuna}
											onChange={handleChange}
										/>
										{errors.comuna && <h6 className="parrafo">{errors.comuna}</h6>}
									</div>
									<div className="form-group col-4">
										<label> Direccion</label>
										<input
											className="form-control"
											type="texto"
											name="address"
											placeholder=""
											value={values.address}
											onChange={handleChange}
										/>
										{errors.address && <h6 className="parrafo">{errors.address}</h6>}
									</div>
								</div>
								<button type="submit" className="col-12 btn btn-primary">
									Actualizar
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
