import React, { useState } from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Eventcalendar, toast, localeEs } from "@mobiscroll/react";

const now = new Date();
const myEvents = [
	{
		start: new Date(now.getFullYear(), 3, 1, 10),
		title: "Limpieza Mantencion, 3D 2B",
		color: "#CDA3AE",
		location: "Cliente: Carlos Plaza - Ariosto 7256, La Reina"
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
