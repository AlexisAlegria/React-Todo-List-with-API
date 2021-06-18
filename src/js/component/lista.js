import React from "react";
import PropTypes from "prop-types";

export default function Lista(props) {
	// console.log(props.contenido);
	function alerta() {
		alert("HOLI");
	}
	return (
		<div>
			<li
				className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
				id={props.id}>
				El presente elemento es &quot;{props.contenido}&quot;
				<span>
					<a href="#">
						<i onClick={alerta} className="fas fa-times"></i>
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
