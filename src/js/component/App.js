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
		console.log(newData);
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

	const deleteToDo = () => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/alexisalegria",
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json"
				}
			}
		).then(() => {
			fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/alexisalegria",
				{
					method: "POST",
					body: JSON.stringify([]),
					headers: {
						"Content-Type": "application/json"
					}
				}
			);
		});
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

	const deleteOne = id => {
		let deleteOneTask = array.filter(item => item !== array[id]);
		setArray(deleteOneTask, updateToDo(deleteOneTask));
	};

	const deleteAll = () => {
		setArray([], deleteToDo());
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
							if (item.label.length > 0) {
								return (
									<li
										key={index}
										className="list-group-item list-group-i	tem-action d-flex justify-content-between align-items-center">
										{item.label}
										<span>
											<i
												id={index}
												onClick={e =>
													deleteOne(e.target.id)
												}
												className="far fa-trash-alt"></i>
										</span>
									</li>
								);
							}
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
					<div>
						<button
							type="button"
							className="btn btn-danger mt-3"
							onClick={deleteAll}>
							Delete all Tasks
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default App;
