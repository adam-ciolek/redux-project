import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer);

const App = () => {
	return (
		<>
			<Wrapper>
				<Container>
					<Navbar />
				</Container>
			</Wrapper>
			<Container>
				<Products />
			</Container>
		</>
	);
};

const Wrapper = styled.div`
	background-color: #2ecc71;
	padding: 1.5rem 0;
`;

const Container = styled.section`
	max-width: 1000px;
	margin: 0 auto;
`;

export default App;
