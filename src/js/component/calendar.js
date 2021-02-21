import React, { useState } from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Eventcalendar, toast, localeEs } from "@mobiscroll/react";

const now = new Date();
const myEvents = [
	{
		start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14),
		end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16),
		title: "Limpieza Mantencion",
		color: "#43DEBE",
		location: "Cliente: Andrea Bravo - Santo domingo 1475, Santiago"
	},
	{
		start: new Date(now.getFullYear(), now.getMonth(), 19, 14),
		end: new Date(now.getFullYear(), now.getMonth(), 19, 16),
		title: "Limpieza Mantencion",
		color: "#43DEBE",
		location: "Cliente: Juan Jimenez - Av Francisco Bilbao 4563, Providencia"
	},
	{
		start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9),
		end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12),
		title: "Planchado",
		color: "#43DEBE",
		location: " Cliente: Jose Perez - Direccion: Av Las Condes 3326, Las Condes"
	}
];

export function Calendar() {
	const onEventClick = React.useCallback(event => {
		toast({
			message: event.event.location
		});
	}, []);

	const view = React.useMemo(() => {
		return {
			calendar: { type: "week" },
			agenda: { type: "day" }
		};
	}, []);

	return (
		<Eventcalendar
			theme="material"
			themeVariant="light"
			locale={localeEs}
			data={myEvents}
			view={view}
			onEventClick={onEventClick}
		/>
	);
}
