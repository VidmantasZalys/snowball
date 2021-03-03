import HeaderAll from "../components/HeaderAll";
import CartItemsList from "../components/cart/CartItemsList";

const CartShop = ({ cartItems, setCartItems }) => {
	return (
		<div>
			<HeaderAll />
			<CartItemsList cartItems={cartItems} setCartItems={setCartItems} />
		</div>
	);
};

export default CartShop;
