import React, { useEffect } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { GET_TOTALS, RESET } from "../action";
import Product from "./Product";

const Products = ({ products = [], total, reset, dispatch }) => {
	useEffect(() => {
		dispatch({ type: GET_TOTALS });
	});

	if (products.length === 0) {
		return <h2>Your bag is empty</h2>;
	}

	return (
		<Section>
			<h2>Your Products</h2>
			<div>
				{products.map((product) => {
					const { id } = product;
					return <Product key={id} {...product} />;
				})}
			</div>
			<p className="total">total: ${total}</p>
			<div className="btn">
				<button onClick={() => dispatch({ type: RESET })}>Clear cart</button>
			</div>
		</Section>
	);
};

const mapStateToProps = (state) => {
	return { products: state.cart, total: state.total };
};

export default connect(mapStateToProps)(Products);

const Section = styled.section`
	margin-top: 2rem;
	h2 {
		text-align: center;
	}
	img {
		width: 300px;
	}
	.card {
		display: flex;
		align-items: center;
		flex: 1;
	}
	.info {
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: space-between;
		&__card {
			display: flex;
			align-items: center;
		}
	}
	.card button {
		margin-top: 1rem;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}

	span {
		margin: 0 1rem;
	}

	.amount {
		cursor: pointer;
	}
	.total {
		margin-top: 1rem;
		text-align: right;
		font-weight: bold;
	}
	.btn {
		text-align: center;
		margin-top: 3rem;
	}

	.btn button {
		padding: 1rem 2rem;
		font-size: 1rem;
		text-transform: uppercase;
	}
`;
