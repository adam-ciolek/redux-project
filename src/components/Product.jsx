import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { REMOVE, INCREASE, DEACREASE } from "../action";
import { connect } from "react-redux";
const Product = ({
	id,
	url,
	title,
	price,
	increase,
	deacrease,
	amount,
	remove,
}) => {
	return (
		<div key={id} className="card">
			<div className="info">
				<div className="info__card">
					<img src={url} alt={title} />
					<div>
						<h3>{title}</h3>
						<p>${price}</p>
						<button onClick={() => remove()}>Remove</button>
					</div>
				</div>
				<div>
					<AiOutlineMinus className="amount" onClick={() => deacrease()} />
					<span>{amount}</span>
					<AiOutlinePlus className="amount" onClick={() => increase()} />
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch, props) => {
	const { id, amount } = props;
	return {
		remove: () => dispatch({ type: REMOVE, payload: id }),
		increase: () => dispatch({ type: INCREASE, payload: { id, amount } }),
		deacrease: () => dispatch({ type: DEACREASE, payload: { id, amount } }),
	};
};

export default connect(null, mapDispatchToProps)(Product);
