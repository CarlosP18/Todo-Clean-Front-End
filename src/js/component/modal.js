import React from "react";
import "../../styles/ayuda.scss";
const Modal = () => {
	return (
		<>
			<div
				className="modal fade"
				id="exampleModal"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header cont_ayuda">
							<h5 className="modal-title color_ayuda" id="exampleModalLabel">
								Contacto
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							{/* <!-- /.row --> */}
							{/* <div className="row">
								<div className="col-lg-8 mb-4"> */}
							<p>
								Este es el medio de contacto ante cualquier problema o consulta, una vez enviado el
								mensaje espera nuestra respuesta.
							</p>
							<form name="sentMessage" id="contactForm">
								<div className="control-group form-group">
									<div className="controls">
										<label>Dirección de Correo:</label>
										<input
											type="email"
											className="form-control"
											id="email"
											required
											data-validation-required-message="Please enter your email address."
										/>
									</div>
								</div>
								<div className="control-group form-group">
									<div className="controls">
										<label>Asunto:</label>
										<input
											type="text"
											className="form-control"
											id="name"
											required
											data-validation-required-message="Please enter your name."
										/>
										<p className="help-block" />
									</div>
								</div>
								<div className="control-group form-group">
									<div className="controls">
										<label>Message:</label>
										<textarea
											rows="10"
											cols="100"
											className="form-control"
											id="message"
											required
											data-validation-required-message="Please enter your message"
										/>
									</div>
								</div>
								<div id="success" />
								{/* <!-- For success/fail messages --> */}
								<button type="submit" className="btn btn_ayuda" id="sendMessageButton">
									Enviar
								</button>
							</form>
							{/* <!-- /.row --> */}
						</div>
						{/* <div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Close
							</button>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
};
export default Modal;
