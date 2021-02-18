export default function validateInfo(values) {
	let errors = {};

	if (!values.username.trim()) {
		errors.username = "Nombre es requerido";
	} else if (!/^[a-zA-Z]+$/.test(values.username)) {
		errors.username = "Ingresa nombre correcto";
	}
	if (!values.lastname) {
		errors.lastname = "Apellido es requerido";
	} else if (!/^[a-zA-Z]+$/.test(values.lastname)) {
		errors.lastname = "ingresa un apellido correcto";
	}
	if (!values.rut) {
		errors.rut = "Rut es requerido";
	} else if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(values.rut)) {
		errors.rut = "ingresa un rut valido ej: 16534466-9";
	}
	if (!values.phone) {
		errors.phone = "Telefono es requerido";
	} else if (!/^\d{9}$/.test(values.phone)) {
		errors.phone = "ingresa un numero telefonico valido";
	}
	if (!values.email) {
		errors.email = "Email es requerido";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email no valido";
	}

	if (!values.password) {
		errors.password = "Contraseña es requerida";
	} else if (values.password.length < 8) {
		errors.password = "la contraseña debe tener 8 caracteres";
	}

	if (!values.password2) {
		errors.password2 = "Contraseña es requerida";
	} else if (values.password2 !== values.password) {
		errors.password2 = "La contraseña no coincide";
	}
	/* 	if (!values.city) {
		errors.city = "Ciudad es requerida";
	} else if (!/^[a-zA-Z]+$/.test(values.city)) {
		errors.city = "Ingrese una ciudad valida";
	}
	if (!values.address) {
		errors.address = "Direccion es requerida";
	} else if (!/^[a-zA-Z]+$/.test(values.address)) {
		errors.address = "Direccion no valida";
	} */
	return errors;
}
