import CartItem from "./CartItem";
import { ContainerDiv } from "../../styles/styles";

import { useEffect } from "react";
import Styled from "styled-components";
const CartItemsList = ({ cartItems, setCartItems }) => {
	//console.log(`ccc ${cartItems}`);
	//console.log(typeof cartItems);
	/* 	useEffect(() => {
		console.log("kazkas pasikeite cartItemsList");
		//console.log(cartItem);
	}, [cartItems]); */

	/* 	cartItems.map((cartItem) => {
		console.log(cartItem);
	}); */

	/* 	setCartItems((state) => {
		console.log(state);
		return state;
	}); */
	return (
		<div>
			<ContainerDiv>
				<ColumnNames>
					<label>No.</label>
					<label>Item Pic</label>
					<label>Item name</label>
					<label>Quantity</label>
					<label>Price</label>
					<label>Total</label>
					<label>Action</label>
				</ColumnNames>
				{cartItems.map((cartItem) => (
					<CartItem cartItem={cartItem} />
				))}
			</ContainerDiv>
		</div>
	);
};

const ColumnNames = Styled.div`
margin-top: 3em;
	width: 100%;
	display: flex;
	justify-content: space-between;
	text-align: center;
	label{
		width: 14%;
	}
	
`;
export default CartItemsList;
