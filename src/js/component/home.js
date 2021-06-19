import React from "react";
import PropTypes from "prop-types";
import Lista from "./lista.js";

//create your first component
export function Home(props) {
	let toDoList = ["Elemento 1", "Elemento 2"];

	function appendArray(element) {
		toDoList.push(element);
		console.log(toDoList);
	}

	const handleKeyPress = event => {
		if (event.key === "Enter") {
			let value = document.getElementById("input-text").value;
			appendArray(value);
			console.log("el arreglo es ", { toDoList });
			document.getElementById("input-text").value = "";
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
				<li className="list-group-item counter" id="task-counter">
					{toDoList.length}{" "}
					{toDoList.length > 1 ? "items left" : "item left"}
				</li>
			</ul>
		</div>
	);
}
Home.propTypes = {
	texto: PropTypes.string
};
