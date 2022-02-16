import { DEACREASE, GET_TOTALS, INCREASE, REMOVE, RESET } from "./action";
import products from "./data";

const initialState = {
	cart: products,
	amount: 0,
	total: 0,
};

export const reducer = (state = initialState, action) => {
	if (action.type === RESET) {
		return { ...state, cart: [] };
	}

	if (action.type === INCREASE) {
		let tempCart = state.cart.map((cartItem) => {
			if (cartItem.id === action.payload.id) {
				cartItem = { ...cartItem, amount: cartItem.amount + 1 };
			}
			return cartItem;
		});
		return { ...state, cart: tempCart };
	}

	if (action.type === DEACREASE) {
		let tempCart = [];
		if (action.payload.amount === 1) {
			tempCart = state.cart.filter((item) => item.id !== action.payload.id);
		} else {
			tempCart = state.cart.map((cartItem) => {
				if (cartItem.id === action.payload.id) {
					cartItem = { ...cartItem, amount: cartItem.amount - 1 };
				}
				return cartItem;
			});
		}
		return { ...state, cart: tempCart };
	}

	if (action.type === REMOVE) {
		let tempRemove = state.cart.filter((item) => item.id !== action.payload);
		return { ...state, cart: tempRemove };
	}

	if (action.type === GET_TOTALS) {
		let { total, amount } = state.cart.reduce(
			(cartTotal, cartItem) => {
				const { price, amount } = cartItem;
				const itemTotal = price * amount;

				cartTotal.amount += amount;
				cartTotal.total += itemTotal;

				return cartTotal;
			},
			{ amount: 0, total: 0 }
		);
		total = parseFloat(total.toFixed(2));
		return { ...state, total, amount };
	}

	return state;
};
