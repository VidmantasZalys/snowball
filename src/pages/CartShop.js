import HeaderAll from "../components/HeaderAll";
import CartItemsList from "../components/cart/CartItemsList";
import { useEffect } from "react";
const CartShop = ({ cartItems, setCartItems }) => {
	/* 	useEffect(() => {
		console.log("kazkas pasikeite cartShop");
		console.log(cartItems);
	}, [cartItems]); */

	return (
		<div>
			<HeaderAll cartItems={cartItems} />
			<CartItemsList cartItems={cartItems} setCartItems={setCartItems} />
		</div>
	);
};

export default CartShop;
