import React from "react";
import PropTypes from "prop-types";

export default function Lista(props) {
	// console.log(props.contenido);
	function alerta(elem) {
		alert(elem);
	}

	return (
		<div>
			<li
				className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
				id={props.id}
				onClick={e => this.alerta(e.target.id)}>
				{/* No Logro que obtenga el ID del elemento clickeado */}
				El presente elemento es &quot;{props.contenido}&quot;
				<span>
					<a href="#">
						<i
							// onClick={() => alerta(this)}
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
