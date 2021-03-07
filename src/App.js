import About from "./pages/About";
//import Services from "./pages/Services";
import OurStore from "./pages/OurStore";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import { StoreData } from "./data";
import CartShop from "./pages/CartShop";
//global styles
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
	const [items, setItems] = useState(StoreData);
	const [cartItems, setCartItems] = useState(["cbbb1", "cbbb2", "cbbb4"]);
	return (
		<>
			<GlobalStyle />
			<Switch>
				<Route path="/" exact>
					<About />
				</Route>
				{/* 		<Route path="/services">
					<Services />
				</Route> */}
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
