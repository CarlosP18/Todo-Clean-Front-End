const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
			users: []
		},
		actions: {
			submitForm: user => {
				fetch(`http://localhost:3000/user/signup`, {
					method: "POST",
					body: JSON.stringify(user),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response => console.log("Success:", response))
					.catch(error => console.error("Error:", error));
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
