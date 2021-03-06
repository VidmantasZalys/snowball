import { useEffect } from "react";

const CartItem = ({ cartItem }) => {
	/* 	console.log(`ccc ${cartItem}`);
	useEffect(() => {
		console.log("kazkas pasikeite cartItems");
		//console.log(cartItem);
	}, [cartItem]); */
	return (
		<div>
			<p>{cartItem.itemName}</p>
			<p>{cartItem.itemId}</p>
		</div>
	);
};

export default CartItem;
