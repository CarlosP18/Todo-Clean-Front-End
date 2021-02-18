import React from "react";
import "../../../styles/misdatoscliente.scss";

export const MisdatosCliente = () => {
	return (
		<>
			<section className="get-in-touch">
				<h1 className="title">Mis datos</h1>
				<form className="contact-form row">
					<div className="form-field col-lg-6">
						<input id="name" className="input-text js-input" type="text" required />
						<label className="label" name="name">
							Nombre
						</label>
					</div>
					<div className="form-field col-lg-6 ">
						<input id="email" className="input-text js-input" type="email" required />
						<label className="label" name="email">
							E-mail
						</label>
					</div>
					<div className="form-field col-lg-6 ">
						<input id="company" className="input-text js-input" type="text" required />
						<label className="label" name="company">
							Domicilio
						</label>
					</div>
					<div className="form-field col-lg-6 ">
						<input id="phone" className="input-text js-input" type="text" required />
						<label className="label" name="phone">
							Telefono
						</label>
					</div>
					{/* 					<div className="form-field col-lg-12">
						<input id="message" className="input-text js-input" type="text" required />
						<label className="label" name="message">
							Message
						</label>
					</div> */}
					<div className="form-field col-lg-12">
						<input className="submit-btn" type="submit" value="Guardar" />
					</div>
				</form>
			</section>
		</>
	);
};
