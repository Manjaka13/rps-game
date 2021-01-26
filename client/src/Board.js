import React from "react";
import "./Board.scss";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faHandRock, faHandPaper, faHandScissors} from "@fortawesome/free-solid-svg-icons";

function Board(props) {
	const idle = "none";
	const weapon_p1 = props.weapon_p1 ? props.weapon_p1 : idle;
	const weapon_p2 = props.weapon_p2 ? props.weapon_p2 : idle;
	const items = [
		{name: "rock", icon: faHandRock},
		{name: "paper", icon: faHandPaper},
		{name: "scissors", icon: faHandScissors}
	];
	const who_wins = (p1, p2) => {
		let result = 0;
		if(p1 === "rock")
			result = p2 === "paper" ? 2 : p2 === "scissors" ? 1 : 0;
		else if(p1 === "paper")
			result = p2 === "rock" ? 1 : p2 === "scissors" ? 2 : 0;
		else if(p1 === "scissors")
			result = p2 === "rock" ? 2 : p2 === "paper" ? 1 : 0;
		return result;
	};

	
	const p1_items = items.map((item, n) => {
		const style = {
			position: "relative",
			top: weapon_p1 === item.name ? ((n + 1) * -100) + "%" : "0"
		};
		return (
			<div className="item" key={n} style={style}>
				<Icon className={"icon " + item.name} icon={item.icon}/>
			</div>
		);
	});
	const p1_name = "Player";


	const p2_items = items.map((item, n) => {
		const style = {
			position: "relative",
			top: weapon_p2 === item.name ? ((n + 1) * -100) + "%" : "0"
		};
		return (
			<div className="item" key={n} style={style}>
				<Icon className={"icon " + item.name} icon={item.icon}/>
			</div>
		);
	});
	const p2_text = weapon_p2 === "thinking" ? "Preparing to strike..." : "Haha, come on !";
	const p2_name = "Bot";



	let win_className = "center center_disabled";
	let win_text = "";
	let players_choosen = 0;
	items.forEach(item => {
		if(weapon_p1 === item.name)
			players_choosen ++;
		if(weapon_p2 === item.name)
			players_choosen ++;
	});
	if(players_choosen === 2) {
		const winner = who_wins(weapon_p1, weapon_p2);
		win_text = winner === 1 ? "Player won !" : winner === 2 ? "Bot wins !" : "Play again !";
		win_className = "center";
		setTimeout(() => {
			props.reset();
		}, 2000);
	}


	return (
		<div className="rps-board">
			<div className="left">
				<div className="box">
					<div className="card">
						<div className="empty">
							<p className="content">Choose a weapon !</p>
						</div>
						{p1_items}
					</div>
				</div>
				<p className="text">{p1_name}</p>
			</div>
			<div className={win_className}>
				<div className="box">
					<p className="win_text">{win_text}</p>
				</div>
			</div>
			<div className="right">
				<div className="box">
					<div className="card">
						<div className="empty">
							<p className="content">{p2_text}</p>
						</div>
						{p2_items}
					</div>
				</div>
				<p className="text">{p2_name}</p>
			</div>
		</div>
	);
}

export default Board;