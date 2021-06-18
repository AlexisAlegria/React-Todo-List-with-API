import React from "react";
import PropTypes from "prop-types";

export default function Lista(props) {
	// console.log(props.contenido);
	function alerta(data) {
		console.log("el elemento recibido es ", data);
		alert(data);
	}

	return (
		<div>
			<li
				className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
				id={props.id}
				// onClick={e => alerta(e.target.id)}
			>
				El presente elemento es &quot;{props.contenido}&quot;
				<span>
					<a href="#">
						<i
							id={props.id}
							onClick={e => alerta(e.target.id)}
							className="fas fa-times"></i>
					</a>
				</span>
			</li>
		</div>
	);
}

Lista.propTypes = {
	contenido: PropTypes.array,
	id: PropTypes.number
};
