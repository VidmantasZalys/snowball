import About from "./pages/About";
import Services from "./pages/Services";
import OurStore from "./pages/OurStore";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import { StoreData } from "./data";
import CartShop from "./pages/CartShop";
//global styles
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
	const [items, setItems] = useState(StoreData);
	/* 	let [cartItems, setCartItems] = useState([
		{ itemId: "mhm", vnt: 3 },
		{ itemId: "mh", vnt: 4 },
	]); */
	let [cartItems, setCartItems] = useState([]);
	return (
		<>
			<GlobalStyle />
			<Switch>
				<Route path="/" exact>
					<About />
				</Route>
				<Route path="/services">
					<Services />
				</Route>
				<Route path="/ourstore">
					<OurStore
						items={items}
						setCartItems={setCartItems}
						cartItems={cartItems}
					/>
				</Route>
				<Route path="/cartshop">
					<CartShop cartItems={cartItems} setCartItems={setCartItems} />
				</Route>
			</Switch>
		</>
	);
}

export default App;
