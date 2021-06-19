import React, { useState } from "react";
// import PropTypes from "prop-types";
// import Lista from "./lista.js";

export function Home(props) {
	const [array, setArray] = useState(["Elemento 1", "Elemento 2"]);

	const handleKeyPress = event => {
		if (event.key === "Enter") {
			// let value = document.getElementById("input-text").value; -Esta forma no se usa
			// let value = event.target.value;
			// setArray(array.push(value)); -> Si uso push, no funciona la funcion map
			setArray(array.concat(event.target.value));
			console.log("el arreglo nuevo es ", array);
			event.target.value = "";
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
				{/* {array.map(function(item, index) {
					return (
						<li
							key={index}
							className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
							{item}
							<span>
								<a href="#">
									<i
										id={index}
										// onClick={e => borrar(e.target.id)}
										className="fas fa-times"></i>
								</a>
							</span>
						</li>
					);
				})} */}

				{array.map((item, index) => {
					console.log(
						"trabajando el elemento ",
						item,
						"; en el index ",
						index
					);
					return (
						<li
							key={index}
							className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
							{item}
							<span>
								<a href="#">
									<i
										id={index}
										// onClick={e => borrar(e.target.id)}
										className="fas fa-times"></i>
								</a>
							</span>
						</li>
					);
				})}

				<li className="list-group-item counter" id="task-counter">
					{array.length}{" "}
					{array.length > 1 ? "items left" : "item left"}
				</li>
			</ul>
		</div>
	);
}
// Home.propTypes = {
// 	texto: PropTypes.string
// };
