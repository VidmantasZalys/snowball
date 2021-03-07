import { useEffect } from "react";
import Styled from "styled-components";

const CartItem = ({ cartItem }) => {
	/* 	console.log(`ccc ${cartItem}`);
	useEffect(() => {
		console.log("kazkas pasikeite cartItems");
		//console.log(cartItem);
	}, [cartItem]); */

	/* 	itemImg: item.img,
	itemName: item.itemName,
	itemPrice: item.price,
	itemQnt: 1,
	itemId: item.id, */

	return (
		<CartItems>
			<CartItemInfo>1.</CartItemInfo>
			<CartItemInfo>
				<img src={cartItem.itemImg} alt={cartItem.itemName} />
			</CartItemInfo>
			<CartItemInfo>
				<h3>{cartItem.itemName}</h3>
				<p>{cartItem.itemDesc}</p>
			</CartItemInfo>
			<CartItemInfo>
				<input type="number" min="0" value="1" />
			</CartItemInfo>
			<CartItemInfo>{cartItem.itemPrice}</CartItemInfo>
			<CartItemInfo>0</CartItemInfo>
		</CartItems>
	);
};
const CartItems = Styled.div`
display:flex;
justify-content: space-between;
text-align: center;
border-top: 1px solid #4f4d65;
`;

const CartItemInfo = Styled.div`
padding: 1em 0em 1em 0em;
input{
	padding: 0.5em 0.5em;
	font-size: 12pt;
	text-align:center;
	margin:0;
	border-radius: 20px;
	outline: none;
}
img{
	width: 100px;
	height: 100px;
	border-radius: 50%;
}


`;
export default CartItem;
