import React, { useState, useEffect } from "react";

export function Home(props) {
	const [array, setArray] = useState([]);

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

	const updateToDo = newData => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/apolopino", {
			method: "PUT",
			body: JSON.stringify(newData),
			headers: {
				"Content-Type": "application/json"
			}
		});
		// .then(resp => llamaToDo()); --> Para volver a llamar los to-dos y verificar que se están guardados.
	};

	const handleKeyPress = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			let arreglo = { label: e.target.value, done: false };

			setArray(
				array.concat({ label: `${e.target.value}`, done: false }),
				updateToDo([...array, arreglo])
			);
			e.target.value = "";
		}
	};

	const borrar = data => {
		let nuevoToDo = array.filter(item => item !== array[data]);
		setArray(nuevoToDo, updateToDo(nuevoToDo));
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
