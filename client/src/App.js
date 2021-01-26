import React, {useState} from "react";
import "./App.scss";
import Navigation from "./Navigation";
import Board from "./Board";
import Cardlist from "./Cardlist";

function App() {
	const [weapon_p1, setWeapon_p1] = useState("none");
	const [weapon_p2, setWeapon_p2] = useState("none");
	const [choice, setChoice] = useState(true);
	const choose = (c) => {
		setChoice(() => !choice);
		setWeapon_p1(() => c);
		setWeapon_p2(() => "thinking");
		setTimeout(() => {
			const w = Math.floor(Math.random() * 3);
			setWeapon_p2(() => w === 0 ? "rock" : w === 1 ? "paper" : "scissors");
		}, 1000);
	};
	const reset = () => {
		setWeapon_p1(() => "none");
		setWeapon_p2(() => "none");
		setChoice(() => true);
	};

	return (
		<div className="rps-app">
			<Navigation />
			<Board weapon_p1={weapon_p1} weapon_p2={weapon_p2} reset={reset} />
			<Cardlist available={choice} choose={choose} />
		</div>
	)
}

export default App;