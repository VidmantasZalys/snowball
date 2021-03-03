const CartItem = ({ cartItem }) => {
	return (
		<div>
			<p>{cartItem.itemName}</p>
			<p>{cartItem.itemId}</p>
		</div>
	);
};

export default CartItem;
