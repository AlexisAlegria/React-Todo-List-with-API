import React, { useState, useEffect } from "react";

export function App(props) {
	const [array, setArray] = useState([]);

	const getTodosFromApi = () => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/alexisalegria",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
			.then(resp => resp.json())
			.then(data => setArray(data));
	};

	const updateToDo = newData => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/alexisalegria",
			{
				method: "PUT",
				body: JSON.stringify(newData),
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
	};

	const handleKeyPress = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			let newTodo = { label: e.target.value, done: false };
			setArray(
				array.concat({ label: `${e.target.value}`, done: false }),
				updateToDo([...array, newTodo])
			);
			e.target.value = "";
		}
	};

	const borrar = data => {
		let deletedTodo = array.filter(item => item !== array[data]);
		setArray(deletedTodo, updateToDo(deletedTodo));
	};

	useEffect(() => {
		getTodosFromApi();
	}, []);

	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-6 text-center">
					<h1 className="text-center">todos</h1>
					<input
						className="form-control shadow"
						id="input-text"
						type="text"
						placeholder="What's new to be done?"
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
										<i
											id={index}
											onClick={e => borrar(e.target.id)}
											className="far fa-trash-alt"></i>
									</span>
								</li>
							);
						})}

						<li
							className="list-group-item counter"
							id="task-counter">
							{array.length}{" "}
							{array.length > 1
								? "items left"
								: array.length === 1
								? "item left"
								: "items left. Add your first!"}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
export default App;
