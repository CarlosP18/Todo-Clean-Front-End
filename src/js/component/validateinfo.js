//registrate y trabaja con nosotros
export function validateInfo(values) {
	let errors = {};

	if (!values.name.trim()) {
		errors.name = "Nombre es requerido";
	} else if (!/^[a-zA-Z]+$/.test(values.name)) {
		errors.name = "Ingresa nombre correcto";
	}
	if (!values.last_name) {
		errors.last_name = "Apellido es requerido";
	} else if (!/^[a-zA-Z]+$/.test(values.last_name)) {
		errors.last_name = "ingresa un apellido correcto";
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
	return errors;
}
//login para ambos casos
export function validateLogin(values) {
	let errors = {};

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

	return errors;
}
//Mis datos cliente, actualizar datos
export function validateForm(values) {
	let errors = {};

	if (!values.name.trim()) {
		errors.name = "Nombre es requerido";
	} else if (!/^[a-zA-Z]+$/.test(values.name)) {
		errors.name = "Ingresa nombre correcto";
	}
	if (!values.last_name) {
		errors.last_name = "Apellido es requerido";
	} else if (!/^[a-zA-Z]+$/.test(values.last_name)) {
		errors.last_name = "ingresa un apellido correcto";
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
	if (!values.city) {
		errors.city = "Ciudad es requerida";
	} else if (!/^[a-zA-Z]+$/.test(values.city)) {
		errors.city = "Ingrese una ciudad valida";
	}
	if (!values.address) {
		errors.address = "Direccion es requerida";
	} else if (!/^[a-zA-Z]+$/.test(values.address)) {
		errors.address = "Direccion no valida";
	}
	if (!values.comuna) {
		errors.comuna = "Direccion es requerida";
	} else if (!/^[a-zA-Z]+$/.test(values.comuna)) {
		errors.comuna = "Direccion no valida";
	}
}
//formulario de trabajador inicio de labores
export function validateFormTrabajador(values) {
	let errors = {};

	if (!values.name.trim()) {
		errors.name = "Nombre es requerido";
	} else if (!/^[a-zA-Z]+$/.test(values.name)) {
		errors.name = "Ingresa nombre correcto";
	}
	if (!values.last_name) {
		errors.last_name = "Apellido es requerido";
	} else if (!/^[a-zA-Z]+$/.test(values.last_name)) {
		errors.last_name = "ingresa un apellido correcto";
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
	if (!values.city) {
		errors.city = "Ciudad es requerida";
	} else if (!/^[a-zA-Z]+$/.test(values.city)) {
		errors.city = "Ingrese una ciudad valida";
	}
	if (!values.address) {
		errors.address = "Direccion es requerida";
	} else if (!/^[a-zA-Z]+$/.test(values.address)) {
		errors.address = "Direccion no valida";
	}
	if (!values.comuna) {
		errors.comuna = "Comuna es requerida";
	} else if (!/^[a-zA-Z]+$/.test(values.comuna)) {
		errors.comuna = "Comuna no valida";
	}
	if (!values.bank) {
		errors.bank = "Banco es requerido";
	} else if (!/^[a-zA-Z]+$/.test(values.bank)) {
		errors.bank = "Banco no valido";
	}
	if (!values.cuenta) {
		errors.cuenta = "tipo de cuenta es requerido";
	} else if (!/^([a-z\sáéíóúñÁÉÍÓÚÑ]+)$/i.test(values.cuenta)) {
		errors.cuenta = "tipo de cuenta no valido ej:cta vista";
	}
	if (!values.numero_cuenta) {
		errors.numero_cuenta = "Numero de cuenta es requerido";
	} else if (!/^[0-9]{4,16}$/.test(values.numero_cuenta)) {
		errors.numero_cuenta = "Numero de cuenta no valido";
	}
	return errors;
}
