import React from "react";
import PropTypes from "prop-types";
import Lista from "./lista.js";

//create your first component
export function Home(props) {
	let toDoList = ["holi", "chao", "elemento3"];

	function appendArray(element) {
		toDoList.push(element);
		console.log(toDoList);
	}

	const handleKeyPress = event => {
		if (event.key === "Enter") {
			let value = document.getElementById("input-text").value;
			appendArray(value);
		}
	};

	return (
		<div>
			<input
				className="form-control"
				id="input-text"
				type="text"
				placeholder="Default input"
				onKeyPress={handleKeyPress}
			/>
			<ul className="list-group">
				{toDoList.map(function(item, index) {
					{
						return <Lista contenido={item} id={index} />;
					}
				})}
			</ul>
		</div>
	);
}
Home.propTypes = {
	texto: PropTypes.string
};
