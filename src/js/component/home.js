import React, { useState } from "react";

export function Home(props) {
	const [array, setArray] = useState([
		"Add your own elements",
		"And clear them!"
	]);

	const handleKeyPress = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			// let value = document.getElementById("input-text").value; -Esta forma no se usa
			// setArray(array.push(value)); -> Si uso push, no funciona la funcion map
			setArray(array.concat(e.target.value));
			console.log("el arreglo nuevo es ", array);
			e.target.value = "";
		}
	};

	const borrar = data => {
		console.log("se borrara el elemento ", data, " del array");
		setArray(array.filter(item => item !== array[data]));
	};

	return (
		<div>
			<h1 className="text-center">Simple to-do List</h1>
			<input
				className="form-control shadow"
				id="input-text"
				type="text"
				placeholder="Add your to-do's"
				onKeyPress={handleKeyPress}
			/>
			<ul className="list-group shadow">
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
										onClick={e => borrar(e.target.id)}
										className="far fa-check-square"></i>
								</a>
							</span>
						</li>
					);
				})}

				<li className="list-group-item counter" id="task-counter">
					{array.length}{" "}
					{array.length > 1
						? "items left"
						: array.length === 1
						? "item left"
						: "items left. Add your first!"}
				</li>
			</ul>
		</div>
	);
}
