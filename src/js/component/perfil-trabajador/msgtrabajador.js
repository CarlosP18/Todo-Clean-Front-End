import React from "react";
import "../../../styles/msjcliente.scss";

export const MsjTrabajador = () => {
	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-12 col-md-6 col-sm-12 col-xs-12">
					<div className="card p-4 p-md-4 my-4 mx-3 mx-md-0">
						<h6>Hola!</h6>
						<p>Escribele un directo al Cliente!</p>
						<form>
							<div className="form-group">
								{" "}
								<label> Nombre </label> <input type="text" className="form-control" />{" "}
							</div>
							<div className="form-group">
								{" "}
								<label> Email </label> <input type="email" className="form-control" />{" "}
							</div>
							<div className="form-group">
								{" "}
								<label> Mensaje </label> <input type="text" height="30px" className="form-control" />{" "}
							</div>{" "}
							<button type="submit" className="col-12 btn btn-primary">
								Start chat
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
