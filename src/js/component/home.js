import React, { useState, useEffect } from "react";

export function Home(props) {
	const [array, setArray] = useState([]);

	// Obtengo los To-Dos via api
	const llamaToDo = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/apolopino", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => resp.json())
			.then(data => setArray(data));
	};

	//Pusheo el nuevo array
	const updateToDo = array => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/apolopino", {
			method: "PUT",
			body: JSON.stringify(array),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(resp => llamaToDo());
	};

	const handleKeyPress = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			// setArray(array.concat(e.target.value)); //Sirve solo para arrays, ahora es objeto
			// console.log("el arreglo nuevo es ", array);
			let arreglo = { label: e.target.value, done: "false" };

			setArray(
				array.concat({ label: `${e.target.value}`, done: false }),
				updateToDo(array),
				console.log(JSON.stringify(array))
			);
			//Hay un problema: setState no llega con el nuevo array para hacer el update en la API ni en console. MAnu recomienda usar un boton y ver que pasa

			// console.log("pre setArray ", array);
			// setArray(array.concat(arreglo));
			e.target.value = "";
			console.log("post setArray ", array); //Por alguna razon, no actualiza el estado en esta misma funcion
		}
	};

	const borrar = data => {
		console.log("se borrara el elemento ", data, " del array");
		setArray(
			array.filter(item => item !== array[data]),
			updateToDo(array)
		);
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
					// console.log(
					// 	"renderizando el elemento ",
					// 	item,
					// 	"; en el index ",
					// 	index
					// );
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
