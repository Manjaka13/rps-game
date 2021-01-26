import React from "react";
import "./Cardlist.scss";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faHandRock, faHandPaper, faHandScissors} from "@fortawesome/free-solid-svg-icons";

function Cardlist(props) {
	const available = props.available ? true : false;
	const class_name = available ? "card" : "card card_disabled";
	//When user clicks an item
	const handle_click = (item) => {
		if(typeof(props.choose) === "function" && available)
			props.choose(item);
	};
	const items = [
		{name: "rock", icon: faHandRock},
		{name: "paper", icon: faHandPaper},
		{name: "scissors", icon: faHandScissors}
	];
	const mapped_items = items.map((item, n) => {
		return (
			<div className={class_name} key={n}>
				<div className="item" title={"Choose " + item.name} onClick={() => handle_click(item.name)}>
					<Icon className="icon" icon={item.icon} />
				</div>
			</div>
		);
	});

	return (
		<div className="rps-cardlist">
			{mapped_items}
		</div>
	)
}

export default Cardlist;