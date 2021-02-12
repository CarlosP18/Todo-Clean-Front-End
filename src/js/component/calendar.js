import React from "react";
import mainImg from "../../img/mainImg.jpeg";
import logo from "../../img/logo.png";
import "../../styles/calendar.scss";

export const Calendar = () => (
	<div className="container-fluid justify-content-center wrapper mt-5">
		<main>
			<div className="toolbar">
				<div className="toggle">
					<div className="toggle__option">semana</div>
					<div className="toggle__option toggle__option--selected">mes</div>
				</div>
				<div className="current-month">Febrero 2021</div>
			</div>
			<div className="calendar">
				<div className="calendar__header">
					<div>LUN</div>
					<div>MAR</div>
					<div>MIE</div>
					<div>JUE</div>
					<div>VIE</div>
					<div>SAB</div>
					<div>DOM</div>
				</div>
				<div className="calendar__week">
					<div className="calendar__day day">1</div>
					<div className="calendar__day day">2</div>
					<div className="calendar__day day">3</div>
					<div className="calendar__day day">4</div>
					<div className="calendar__day day">5</div>
					<div className="calendar__day day">6</div>
					<div className="calendar__day day">7</div>
				</div>
				<div className="calendar__week">
					<div className="calendar__day day">8</div>
					<div className="calendar__day day">9</div>
					<div className="calendar__day day">10</div>
					<div className="calendar__day day">11</div>
					<div className="calendar__day day">12</div>
					<div className="calendar__day day">13</div>
					<div className="calendar__day day">14</div>
				</div>
				<div className="calendar__week">
					<div className="calendar__day day">15</div>
					<div className="calendar__day day">16</div>
					<div className="calendar__day day">17</div>
					<div className="calendar__day day">18</div>
					<div className="calendar__day day">19</div>
					<div className="calendar__day day">20</div>
					<div className="calendar__day day">21</div>
				</div>
				<div className="calendar__week">
					<div className="calendar__day day">22</div>
					<div className="calendar__day day">23</div>
					<div className="calendar__day day">24</div>
					<div className="calendar__day day">25</div>
					<div className="calendar__day day">26</div>
					<div className="calendar__day day">27</div>
					<div className="calendar__day day">28</div>
				</div>
			</div>
		</main>
	</div>
);
