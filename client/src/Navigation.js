import React from "react";
import "./Navigation.scss";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faGamepad} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Navigation() {
	const social = [
		{
			title: "Visit my Facebook page !",
			icon: faFacebook,
			link: "https://facebook.com/manjaka13"
		},
		{
			title: "Contribute this game's repository",
			icon: faGithub,
			link: "https://facebook.com/manjaka13/rock-paper-scissors-game"
		},
		{
			title: "Visit my LinkedIn page",
			icon: faLinkedin,
			link: "https://linkedin.com/mwlite/in/harijaona-rajaonson-9456481b5"
		}
	];
	const mapped_social = social.map((item, n) => {
		return (
			<li key={n}>
				<a className="link" href={item.link} title={item.title}>
					<Icon className="icon" icon={item.icon} />
				</a>
			</li>
		);
	});

	return (
		<div className="rps-navigation">
			<div className="brand">
				<div className="game">
					<Icon className="icon" icon={faGamepad} />
				</div>
				<h1 className="title title-md">Rock Paper Scissors</h1>
			</div>
			<ul className="social">
				{mapped_social}
			</ul>
		</div>
	);
}

export default Navigation;