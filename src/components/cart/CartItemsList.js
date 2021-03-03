import CartItem from "./CartItem";
const CartItemsList = ({ cartItems, setCartItems }) => {
	return (
		<div>
			{cartItems.map((cartItem) => {
				<CartItem cartItem={cartItem} />;
			})}
		</div>
	);
};

export default CartItemsList;
