import { useEffect } from "react";
import Styled from "styled-components";
import Remove from "../../img/delete.svg";

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
				<CartItemImg src={cartItem.itemImg} alt={cartItem.itemName} />
			</CartItemInfo>
			<CartItemInfo>
				<h3>{cartItem.itemName}</h3>
				<p>{cartItem.itemDesc}</p>
			</CartItemInfo>
			<CartItemInfo>
				<input type="number" min="0" value={cartItem.itemQnt} />
			</CartItemInfo>
			<CartItemInfo>{cartItem.itemPrice} Eur</CartItemInfo>
			<CartItemInfo>0</CartItemInfo>
			<CartItemInfo>
				<RemoveImg src={Remove} alt="Remove" />
			</CartItemInfo>
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
width: 14%;
p{
	font-size: 8pt;
	text-align: left;
}
input{
	padding: 0.5em 0.5em;
	font-size: 12pt;
	text-align:center;
	margin:0;
	border-radius: 20px;
	outline: none;
	width: 50%;
}

`;
const CartItemImg = Styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
`;
const RemoveImg = Styled.img`
width: 20%;
`;
export default CartItem;
