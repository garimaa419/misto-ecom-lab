import CartContext from "./cart-context";
import { useReducer } from "react";

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ITEM": {
			const newCartList = {
				...state,
				items: [...state.items, action.product],
			};
			// store it in localstorage
			window.localStorage.setItem("cart", JSON.stringify(newCartList.items));
			return newCartList;
		}

		case "REMOVE_ITEM": {
			const newCartList = {
				...state,
				items: state.items.filter((item) => item.id !== action.id),
			};
			// store it in localstorage
			window.localStorage.setItem("cart", JSON.stringify(newCartList.items));
			return newCartList;
		}
		case "CLEAR_CART": {
			const newCartList = {
				...state,
				items: [],
			};
			window.localStorage.setItem("cart", JSON.stringify(newCartList.items));
			return newCartList;
		}
		default:
			return state;
	}
};
const cartItems = JSON.parse(window.localStorage.getItem("cart"));
const CartProvider = (props) => {
	const [cartState, dispatchCartState] = useReducer(cartReducer, {
		items: cartItems ? [...cartItems] : [],
	});
	const cartContext = {
		items: cartState.items,
		addItem: (product) => {
			dispatchCartState({
				type: "ADD_ITEM",
				product,
			});
		},
		removeItem: (id) => {
			dispatchCartState({
				type: "REMOVE_ITEM",
				id,
			});
		},
		clearCart: () => {
			dispatchCartState({
				type: "CLEAR_CART",
			});
		},
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};
export default CartProvider;
