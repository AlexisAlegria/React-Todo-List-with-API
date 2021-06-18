import React from "react";
import PropTypes from "prop-types";
import Lista from "./lista.js";

//create your first component
export function Home(props) {
	let toDoList = ["holi", "chao", "elemento3"];

	function appendArray(element) {
		toDoList.push(element);
	}

	// let lista = "";
	// function mapArray() {
	// 	for (let i = 0; i < toDoList.length; i++) {
	// 		return <Lista />;
	// 	}
	// }

	return (
		<div>
			<ul className="list-group">
				{/* {mapArray()} */}

				{toDoList.map(function(item, index) {
					// console.log(item);
					{
						return <Lista contenido={item} id={index} />;
					}
				})}

				{/* <Lista /> */}
			</ul>
		</div>
	);
}
Home.propTypes = {
	texto: PropTypes.string
};
