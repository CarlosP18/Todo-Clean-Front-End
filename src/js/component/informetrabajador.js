import React from "react";
const InformeT = () => {
	return (
		<>
			<form>
				<div className="form-row">
					<div className="name">Horas de Trabajo:</div>
					<div className="value">
						<input className="input--style-6 form-control" type="number" step="0.5" name="tiempo" />
					</div>
				</div>
				<div className="form-row">
					<div className="name">Servicio:</div>
					<div className="value">
						<input className="input--style-6" type="text" name="servicio" />
					</div>
				</div>
				<div className="form-row">
					<div className="name">Servicio Extra:</div>
					<div className="value">
						<input className="input--style-6" type="text" name="servicio_extra" />
					</div>
				</div>
				<div className="form-row">
					<div className="name">Equipos y/o Productos:</div>
					<div className="value">
						<input className="input--style-6" type="text" name="equipos" />
					</div>
				</div>

				<div className="form-row">
					<div className="name">Resumen:</div>
					<div className="value">
						<div className="input-group">
							<textarea
								className="textarea--style-6"
								name="resumen"
								placeholder="Message sent to the employer"
							/>
						</div>
					</div>
				</div>
				<div className="form-row">
					<div className="name">Imagen Inicio</div>
					<div className="value">
						<div className="input-group js-input-file">
							<input className="input-file" type="file" name="file_img" id="file" />
							<label className="label--file" id="file" />
						</div>
						<div className="label--desc">
							<i className="fas fa-upload" /> Max file size 50 MB
						</div>
					</div>
				</div>
				<div className="form-row">
					<div className="name">Imagen Final</div>
					<div className="value">
						<div className="input-group js-input-file">
							<input className="input-file" type="file" name="file_img" id="file" />
							<label className="label--file" id="file" />
						</div>
						<div className="label--desc">
							<i className="fas fa-upload" /> Max file size 50 MB
						</div>
					</div>
				</div>
			</form>
			<div className="card-footer">
				<button className="btn btn-sm btn-secondary" type="submit">
					Enviar
				</button>
			</div>
		</>
	);
};
export default InformeT;
