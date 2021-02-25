import React, { useRef, useEffect } from "react";

export function Paypal() {
	const paypal = useRef();

	useEffect(() => {
		window.paypal
			.Buttons({
				createOrder: (data, actions, err) => {
					return actions.order.create({
						intent: "CAPTURE",
						purchase_units: [
							{
								description: "Limpieza mantencion, 2D 2B",
								amount: {
									currency_code: "USD",
									value: 80
								}
							}
						]
					});
				},
				onApprove: async (data, actions) => {
					const order = await actions.order.capture();
					console.log(order);
					window.location.reload(true);
				},
				onError: err => {
					console.log(err);
				}
			})
			.render(paypal.current);
	}, []);

	return (
		<div>
			<div ref={paypal} />
		</div>
	);
}
