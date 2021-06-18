import React from "react";
import PropTypes from "prop-types";
import Lista from "./lista.js";

//create your first component
export function Home(props) {
	let toDoList = ["holi", "chao", "elemento3"];

	function appendArray(element) {
		toDoList.push(element);
	}

	return (
		<div>
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
