import React from "react";
import mainImg from "../../img/mainImg.jpeg";
import logo from "../../img/logo.png";
import icon1 from "../../img/icon1.png";
import icon2 from "../../img/icon2.png";
import icon3 from "../../img/icon3.png";
import "../../styles/pricing.scss";

export const Pricing = () => (
	<div className="container-fluid d-flex justify-content-center ">
		<div className="panel">
			<div className="pricing-plan">
				<img src={icon1} alt="" className="pricing-img" />
				<h2 className="pricing-header">BASICO</h2>
				<ul className="pricing-features">
					<li className="pricing-features-item">Lorem ipsum, dolor sit amet consectetur</li>
					<li className="pricing-features-item">Lorem ipsum, dolor sit</li>
				</ul>
				<span className="pricing-price">$29.99</span>
				<a href="#/" className="pricing-button">
					Contratar
				</a>
			</div>

			<div className="pricing-plan">
				<img src={icon2} alt="" className="pricing-img" />
				<h2 className="pricing-header">INTERMEDIO</h2>
				<ul className="pricing-features">
					<li className="pricing-features-item">Lorem ipsum, dolor sit amet consectetur.</li>
					<li className="pricing-features-item">Lorem ipsum, dolor sit</li>
				</ul>
				<span className="pricing-price">$49.99</span>
				<a href="#/" className="pricing-button ">
					Contratar
				</a>
			</div>

			<div className="pricing-plan">
				<img src={icon3} alt="" className="pricing-img" />
				<h2 className="pricing-header">PREMIUM</h2>
				<ul className="pricing-features">
					<li className="pricing-features-item">Lorem ipsum, dolor sit amet consectetur</li>
					<li className="pricing-features-item">Lorem ipsum, dolor sit</li>
				</ul>
				<span className="pricing-price">$99.99</span>
				<a href="#/" className="pricing-button">
					Contratar
				</a>
			</div>
		</div>
	</div>
);
