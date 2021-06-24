import React, { useState, useEffect } from "react";

export function Home(props) {
	const [array, setArray] = useState([]);

	// Obtengo los todos via api

	const llamaToDo = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/apolopino", {
			method: "GET",
			// body: JSON.stringify(todos),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => resp.json())
			.then(data => setArray(data));

		// 	{
		// 	console.log("la respuesta es ", resp.ok); // will be true if the response is successfull
		// 	console.log("el status es ", resp.status); // the status code = 200 or code = 400 etc.
		// 	console.log(resp.text()); // will try return the exact result as string
		// 	return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		// })
		// .then(data => {
		// 	//here is were your code should start after the fetch finishes
		// 	console.log(data); //this will print on the console the exact object received from the server
		// 	setArray(data);
		// })
		// .catch(error => {
		// 	//error handling
		// 	console.log(error);
		// });
	};

	// console.log(array); //Reviso el objeto creado

	const handleKeyPress = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			// let content = e.target.value;

			// setArray(array.concat(e.target.value));
			// console.log("el arreglo nuevo es ", array);
			let arreglo = { label: e.target.value, done: "false" };

			setArray(
				array.concat({ label: `${e.target.value}`, done: "false" })
			);

			// console.log("pre setArray ", array);
			// setArray(array.concat(arreglo));
			e.target.value = "";
			console.log("post setArray ", array); //Por alguna razon, no actualiza el estado en esta misma funcion
		}
	};

	const borrar = data => {
		console.log("se borrara el elemento ", data, " del array");
		setArray(array.filter(item => item !== array[data]));
	};

	useEffect(() => {
		llamaToDo();
	}, []);

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
						"renderizando el elemento ",
						item,
						"; en el index ",
						index
					);
					return (
						<li
							key={index}
							className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
							{item.label}
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
