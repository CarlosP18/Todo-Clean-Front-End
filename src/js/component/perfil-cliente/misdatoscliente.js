import React from "react";
import validate from "../../component/validateinfo";
import useForm from "../../component/useform";
import "../../../styles/msjcliente.scss";

export const MisdatosCliente = submitForm => {
	const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);
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
											name="username"
											placeholder=""
											value={values.username}
											onChange={handleChange}
										/>
										{errors.username && <h6 className="parrafo">{errors.username}</h6>}
									</div>

									<div className="form-group col-6">
										<label> Apellido</label>
										<input
											className="form-control "
											type="text"
											name="lastname"
											placeholder=""
											value={values.lastname}
											onChange={handleChange}
										/>
										{errors.lastname && <h6 className="parrafo">{errors.lastname}</h6>}
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
											name="city"
											placeholder=""
											value={values.city}
											onChange={handleChange}
										/>
										{errors.city && <h6 className="parrafo">{errors.city}</h6>}
									</div>
									<div className="form-group col-4">
										<label> Comuna</label>
										<select
											id="inputState"
											clasName="form-control"
											name="state"
											style={{ height: "35px" }}>
											<option value="" />
											<option value="Algo">Santiago Centro</option>
											<option value="Algo">Providencia</option>
											<option value="Algo">La Reina</option>
											<option value="Algo">lampa</option>
											<option value="Algo">Chillan</option>
											<option value="Algo">Maipu</option>
										</select>
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
