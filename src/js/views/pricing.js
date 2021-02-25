import React, { useState } from "react";
import { Paypal } from "../component/Paypal";
import mainImg from "../../img/mainImg.jpg";
import logo from "../../img/logo.png";
import icon1 from "../../img/icon1.png";

import icon3 from "../../img/icon3.png";
import "../../styles/pricing.scss";

export const Pricing = () => {
	const [checkout, setCheckout] = useState(false);

	return (
		<div className="container-fluid d-flex justify-content-center">
			<div className="panel mt-4 mb-4">
				<div className="pricing-plan">
					<img src={icon1} alt="" className="pricing-img" />
					<h2 className="pricing-header">BASICO</h2>
					<ul className="pricing-features">
						<li className="pricing-features-item">Lorem ipsum, dolor sit amet consectetur</li>
						<li className="pricing-features-item">Lorem ipsum, dolor sit</li>
					</ul>
					<span className="pricing-price">$29.99</span>
					{checkout ? (
						<Paypal />
					) : (
						<a
							href="#/"
							className="pricing-button"
							onClick={() => {
								setCheckout(true);
							}}>
							Contratar
						</a>
					)}
				</div>

				<div className="pricing-plan">
					<img src={icon3} alt="" className="pricing-img" />
					<h2 className="pricing-header">PREMIUM</h2>
					<ul className="pricing-features">
						<li className="pricing-features-item">Lorem ipsum, dolor sit amet consectetur</li>
						<li className="pricing-features-item">Lorem ipsum, dolor sit</li>
					</ul>
					<span className="pricing-price">$99.99</span>
					{checkout ? (
						<Paypal />
					) : (
						<a
							href="#/"
							className="pricing-button"
							onClick={() => {
								setCheckout(true);
							}}>
							Contratar
						</a>
					)}
				</div>
			</div>
		</div>
	);
};
