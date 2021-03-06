import CartItem from "./CartItem";

import { useEffect } from "react";
const CartItemsList = ({ cartItems, setCartItems }) => {
	console.log(`ccc ${cartItems}`);
	//console.log(typeof cartItems);
	/* 	useEffect(() => {
		console.log("kazkas pasikeite cartItemsList");
		//console.log(cartItem);
	}, [cartItems]); */

	setCartItems((state) => {
		console.log(state);
		return state;
	});
	return (
		<div>
			{cartItems.map((cartItem) => {
				<CartItem cartItem={cartItem} />;
			})}
		</div>
	);
};

export default CartItemsList;
