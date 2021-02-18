const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
			users: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			register_user: values => {
				setStore({ user: getStore().user.concat(values) });
			}
		}
	};
};

export default getState;
