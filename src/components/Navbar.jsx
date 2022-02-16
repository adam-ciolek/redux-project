import React from "react";
import styled from "styled-components";
import { BsFillCartFill } from "react-icons/bs";
import { connect } from "react-redux";
const Navbar = ({ amount }) => {
	return (
		<Div>
			<h1>SHOPPING</h1>
			<span>
				<BsFillCartFill />
				<p>{amount}</p>
			</span>
		</Div>
	);
};

const mapStateToProps = (state) => {
	return { amount: state.amount };
};

export default connect(mapStateToProps)(Navbar);

const Div = styled.div`
	display: flex;
	justify-content: space-between;
	color: white;
	span {
		font-size: 1.6rem;
		position: relative;
		p {
			position: absolute;
			top: -8px;
			right: -10px;
			color: black;
			font-size: 1rem;
			background: red;
			height: 20px;
			width: 20px;
			line-height: 20px;
			text-align: center;
			border-radius: 50%;
		}
	}
`;
